import DetailCountry from "@/components/DetailCountry";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function DetailCountryPage({
  countries,
  deleteCountry,
  setCountry,
  newAddedImgs,
}) {
  const [getImagesData, setGetImagesData] = useState([]);
  const router = useRouter();
  const currentPage = router.query.detailCountry;
  const currentCountry = countries.find(
    (country) => country.name === currentPage
  );
  useEffect(() => {
    function handleCurrentCountry() {
      if (currentCountry) {
        setCountry(currentCountry);
      } else {
        return null;
      }
    }
    handleCurrentCountry();
  }, [currentCountry, setCountry]);

  if (!currentPage) {
    return null;
  }

  async function onClickDelete(id, publicIds) {
    await fetch(`/api`, {
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
  function closeButton() {
    newImageDialog.close();
  }
  function newImg() {
    newImageDialog.showModal();
  }

  if (currentCountry === undefined) {
    return null;
  }

  function getImages(data) {
    setGetImagesData([...getImagesData, data]);
  }

  function addImage(event) {
    event.preventDefault();
    const addedImages = {
      imagesUrls: getImagesData.map((data) => data.info.path),
      publicIds: getImagesData.map((data) => data.info.public_id),
    };

    const id = currentCountry.id;
    newAddedImgs(id, addedImages);
  }

  return (
    <>
      <DetailCountry
        currentCountry={currentCountry}
        onClickDelete={onClickDelete}
        showButton={showButton}
        getImages={getImages}
        newImg={newImg}
        addImage={addImage}
        closeButton={closeButton}
      />
    </>
  );
}
