import DetailPictureView from "@/components/DetailPictureView";
import { useRouter } from "next/router";

export default function DetailPictureViewPage({ country, deleteImage }) {
  const router = useRouter();
  const currentPublicId = router.query.detailPictureView;

  if (!currentPublicId) {
    return null;
  }

  const { publicIds, imagesUrls } = country;
  const publicIdIndex = publicIds.findIndex((id) => id === currentPublicId);

  const currentPicture = imagesUrls[publicIdIndex];

  if (currentPicture === undefined) {
    return null;
  }

  async function handleDeletePicture() {
    const response = await fetch(`/api/${currentPublicId}`, {
      method: "DELETE",
    });

    router.back();

    const updatedPublicIds = country.publicIds.filter(
      (id) => id !== currentPublicId
    );
    const updatedImageUrls = country.imagesUrls.filter(
      (url) => url !== currentPicture
    );
    const updatedCountry = {
      ...country,
      publicIds: updatedPublicIds,
      imagesUrls: updatedImageUrls,
    };
    deleteImage(updatedCountry);
  }
  function showImageDelete() {
    deleteImageDialog.showModal();
  }
  return (
    <>
      <DetailPictureView
        currentPicture={currentPicture}
        handleDeletePicture={handleDeletePicture}
        showImageDelete={showImageDelete}
      />
    </>
  );
}
