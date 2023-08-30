import DetailCountry from "@/components/DetailCountry";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function DetailCountryPage({
  countries,
  deleteCountry,
  setCountry,
}) {
  const router = useRouter();
  const currentPage = router.query.detailCountry;

  useEffect(() => {
    handleCurrentCountry();
  }, [handleCurrentCountry]);

  if (!currentPage) {
    return null;
  }

  const currentCountry = countries.find(
    (country) => country.name === currentPage
  );

  async function onClickDelete(id, publicIds) {
    const response = await fetch(`/api`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ publicIds }),
    });
    const countriesWithoutSelectedCountry = countries.filter((country) => {
      if (country.id === id) {
        return false;
      } else {
        return true;
      }
    });

    deleteCountry(countriesWithoutSelectedCountry);
  }

  function showButton() {
    deleteDialog.showModal();
  }

  if (currentCountry === undefined) {
    return null;
  }
  function handleCurrentCountry() {
    if (currentCountry) {
      setCountry(currentCountry);
    } else {
      return null;
    }
  }

  return (
    <>
      <DetailCountry
        countries={countries}
        deleteCountry={deleteCountry}
        setCountry={setCountry}
        currentCountry={currentCountry}
        onClickDelete={onClickDelete}
        showButton={showButton}
      />
    </>
  );
}
