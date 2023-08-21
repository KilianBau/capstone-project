import DetailCountry from "@/components/DetailCountry";

export default function DetailCountryPage({ countries, deleteCountry }) {
  return (
    <>
      <DetailCountry countries={countries} deleteCountry={deleteCountry} />
    </>
  );
}
