import AppName from "@/components/AppName";
import DetailCountry from "@/components/DetailCountry";

export default function DetailCountryPage({ countries }) {
  return (
    <>
      <AppName />
      <DetailCountry countries={countries} />
    </>
  );
}
