import BackButton from "@/components/BackButton";
import CountryForm from "@/components/CountryFormPage";

export default function CountryFormPage({ submitNewCountry }) {
  return (
    <>
      <BackButton />
      <CountryForm submitNewCountry={submitNewCountry} />
    </>
  );
}
