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

    deleteImage(currentPublicId, currentPicture);
    router.back();
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
