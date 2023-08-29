import DetailPictureView from "@/components/DetailPictureView";
import { useRouter } from "next/router";

export default function DetailPictureViewPage({ countries, country }) {
  const router = useRouter();
  const currentPublicId = router.query.detailPictureView;

  if (!currentPublicId) {
    return null;
  }

  const { publicIds, imagesUrls } = country;
  const publicId = publicIds.findIndex((id) => id === currentPublicId);

  const currentPicture = imagesUrls[publicId];

  if (currentPicture === undefined) {
    return null;
  }
  return (
    <>
      <DetailPictureView
        countries={countries}
        country={country}
        currentPicture={currentPicture}
      />
    </>
  );
}
