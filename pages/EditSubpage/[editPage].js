import CountryEditForm from "@/components/CountryEditForm";

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
    console.log("ed", editCountry);
    const updatedEditCountry = {
      ...country,
      name: editCountry.name,
      startDate: editCountry.startdate,
      endDate: editCountry.enddate,
    };

    setCountry(updatedEditCountry);
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
