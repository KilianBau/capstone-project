import BackButton from "@/components/BackButton";
import CountryForm from "@/components/CountryFormPage";
import { useState } from "react";
import { uid } from "uid";

export default function CountryFormPage({ submitNewCountry }) {
  const [imagesData, setImagesData] = useState([]);
  const [isButtonActive, setIsButtonActive] = useState(false);
  function getData(data) {
    if (data) {
      setImagesData([...imagesData, data]);
      setIsButtonActive(true);
      return;
    }
    if (!data) {
      return null, alert("Download failed");
    }
  }

  function onSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const country = Object.fromEntries(formData);
    if (
      country.startdate &&
      country.enddate &&
      country.startdate > country.enddate
    ) {
      alert("Enddatum kann nicht vor dem Startdatum gesetzt werden!");
      return;
    }
    const newCountry = {
      id: uid(),
      name: country.name,
      startDate: country.startdate,
      endDate: country.enddate,
      imagesUrls: imagesData.map((data) => data.info.path),
      publicIds: imagesData.map((data) => data.info.public_id),
    };

    submitNewCountry(newCountry);
  }
  return (
    <>
      <BackButton />
      <CountryForm
        submitNewCountry={submitNewCountry}
        onSubmit={onSubmit}
        isButtonActive={isButtonActive}
        getData={getData}
      />
    </>
  );
}
