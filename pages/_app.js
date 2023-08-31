import AppName from "@/components/AppName";
import GlobalStyle from "../styles";
import { initialCountries } from "@/lib/db";
import useLocalStorageState from "use-local-storage-state";
import NavBar from "@/components/NavBar";
import { useRouter } from "next/router";

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

    console.log("apps", editCountry);
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
      />
    </>
  );
}
