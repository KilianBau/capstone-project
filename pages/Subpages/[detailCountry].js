import { ErrorMessage } from "@/components/Card";
import DetailCountry from "@/components/DetailCountry";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function DetailCountryPage({
  countries,
  deleteCountry,
  setCountry,
  newAddedImgs,
}) {
  const [getImagesData, setGetImagesData] = useState([]);
  const [isSaved, setIsSaved] = useState(false);
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
  function addNewImgDialog() {
    newImageDialog.showModal();
  }

  if (!currentCountry || currentCountry.length === 0) {
    return (
      <>
        <ErrorMessage>Error: Es ist kein Bild vorhanden</ErrorMessage>
        <Link href={"/"}>Startseite</Link>{" "}
      </>
    );
  }

  function getImages(data) {
    if (data) {
      setGetImagesData([...getImagesData, data]);
      setIsSaved(true);
      return;
    }
    if (!data) {
      return null;
    }
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
        addNewImgDialog={addNewImgDialog}
        addImage={addImage}
        closeButton={closeButton}
        isSaved={isSaved}
      />
    </>
  );
}
