import DetailCountry from "@/components/DetailCountry";

export default function DetailCountryPage({
  countries,
  deleteCountry,
  imageData,
}) {
  return (
    <>
      <DetailCountry
        countries={countries}
        deleteCountry={deleteCountry}
        imageData={imageData}
      />
    </>
  );
}
