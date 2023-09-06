import AppName from "@/components/AppName";
import GlobalStyle from "../styles";
import { initialCountries } from "@/lib/db";
import useLocalStorageState from "use-local-storage-state";
import NavBar from "@/components/NavBar";
import { useRouter } from "next/router";
import Image from "next/image";
export default function App({ Component, pageProps }) {
  const [countries, setCountries] = useLocalStorageState("countries", {
    defaultValue: initialCountries,
  });
  const [country, setCountry] = useLocalStorageState();
  const router = useRouter();

  function submitNewCountry(newCountry) {
    setCountries([...countries, newCountry]);
    router.push("/");
  }

  function deleteCountry(countriesWithoutSelectedCountry) {
    setCountries(countriesWithoutSelectedCountry);
  }

  function toggleFavourite(id) {
    const favouriteCountry = countries.find((country) => country.id === id);
    if (favouriteCountry) {
      setCountries(
        countries.map((country) =>
          country.id === id
            ? { ...country, isFavourite: !country.isFavourite }
            : country
        )
      );
    } else {
      setCountries([...countries, { id, isFavourite: true }]);
    }
  }
  function deleteImage(currentPublicId, currentPicture) {
    const updatedPublicIds = country.publicIds.filter(
      (id) => id !== currentPublicId
    );
    const updatedImageUrls = country.imagesUrls.filter(
      (url) => url !== currentPicture
    );
    const updatedCountry = {
      ...country,
      publicIds: updatedPublicIds,
      imagesUrls: updatedImageUrls,
    };
    setCountry(updatedCountry);

    const updatedCountries = countries.map((country) =>
      country.id === updatedCountry.id ? updatedCountry : country
    );
    setCountries(updatedCountries);
  }

  function onEdit(id, editName, start, end) {
    if (start && end && start > end) {
      alert("End date cannot be before the start date");
      return;
    }
    const editCountry = countries.find((country) => country.id === id);

    if (editCountry) {
      setCountries(
        countries.map((country) =>
          country.id === id
            ? { ...country, name: editName, startDate: start, endDate: end }
            : country
        )
      );
    } else {
      setCountries(...countries);
    }
    router.push(`/Subpages/${editName}`);
  }

  function newAddedImgs(id, addedImages) {
    setCountries((countries) => {
      return countries.map((country) => {
        if (country.id === id) {
          if (country.imagesUrls) {
            // with help from chatGPT
            const updatedImagesUrls = [
              ...new Set([...country.imagesUrls, ...addedImages.imagesUrls]),
            ];
            const updatedPublicIds = [
              ...new Set([...country.publicIds, ...addedImages.publicIds]),
            ];
            return {
              ...country,
              imagesUrls: updatedImagesUrls,
              publicIds: updatedPublicIds,
            };
          } else {
            return {
              ...country,
              imagesUrls: addedImages.imagesUrls,
              publicIds: addedImages.publicIds,
            };
          }
        } else {
          return country;
        }
      });
    });
  }

  return (
    <>
      {" "}
      <GlobalStyle />
      <AppName />
      <NavBar />
      <Component
        {...pageProps}
        country={country}
        setCountry={setCountry}
        countries={countries}
        deleteCountry={deleteCountry}
        toggleFavourite={toggleFavourite}
        submitNewCountry={submitNewCountry}
        deleteImage={deleteImage}
        onEdit={onEdit}
        newAddedImgs={newAddedImgs}
      />
    </>
  );
}
