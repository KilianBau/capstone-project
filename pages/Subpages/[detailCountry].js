import DetailCountry from "@/components/DetailCountry";

export default function DetailCountryPage({
  countries,
  deleteCountry,
  setIsCurrentCountry,
}) {
  return (
    <>
      <DetailCountry
        countries={countries}
        deleteCountry={deleteCountry}
        setIsCurrentCountry={setIsCurrentCountry}
      />
    </>
  );
}
