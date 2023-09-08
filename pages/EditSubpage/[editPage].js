import { ErrorMessage } from "@/components/Card";
import CountryEditForm from "@/components/CountryEditForm";
import Link from "next/link";

export default function EditPage({ setCountry, onEdit, country }) {
  function handleInputChangeName(event) {
    const { value } = event.target;

    setCountry({ ...country, name: value });
  }

  function handleInputChangeStartDate(event) {
    const { value } = event.target;

    setCountry({ ...country, startDate: value });
  }

  function handleInputChangeEndDate(event) {
    const { value } = event.target;

    setCountry({ ...country, endDate: value });
  }

  function onSubmitEdit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const editCountry = Object.fromEntries(formData);

    const updatedEditCountry = {
      ...country,
      name: editCountry.name,
      startDate: editCountry.startdate,
      endDate: editCountry.enddate,
    };

    setCountry(updatedEditCountry);
  }
  if (!country || country.length === 0) {
    return (
      <>
        <ErrorMessage>Error: Es ist kein Land vorhanden</ErrorMessage>
        <Link href={"/"}>Startseite</Link>{" "}
      </>
    );
  }

  return (
    <CountryEditForm
      country={country}
      onSubmitEdit={onSubmitEdit}
      handleInputChangeName={handleInputChangeName}
      onEdit={onEdit}
      handleInputChangeEndDate={handleInputChangeEndDate}
      handleInputChangeStartDate={handleInputChangeStartDate}
    />
  );
}
