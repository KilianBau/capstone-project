import DetailPictureView from "@/components/DetailPictureView";

export default function DetailPictureViewPage({ countries, isCurrentCountry }) {
  return (
    <>
      <DetailPictureView
        countries={countries}
        isCurrentCountry={isCurrentCountry}
      />
    </>
  );
}
