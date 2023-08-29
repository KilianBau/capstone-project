import AppName from "@/components/AppName";
import GlobalStyle from "../styles";
import { initialCountries } from "@/lib/db";
import useLocalStorageState from "use-local-storage-state";
import NavBar from "@/components/NavBar";
import { useRouter } from "next/router";
import { useState } from "react";

export default function App({ Component, pageProps }) {
  const [countries, setCountry] = useLocalStorageState("countries", {
    defaultValue: initialCountries,
  });
  const [isCurrentCountry, setIsCurrentCountry] = useLocalStorageState();
  const router = useRouter();
  function submitNewCountry(newCountry) {
    setCountry([...countries, newCountry]);
    router.push("/");
  }

  function deleteCountry(countriesWithoutSelectedCountry) {
    setCountry(countriesWithoutSelectedCountry);
  }

  function toggleFavourite(id) {
    const favouriteCountry = countries.find((country) => country.id === id);
    if (favouriteCountry) {
      setCountry(
        countries.map((country) =>
          country.id === id
            ? { ...country, isFavourite: !country.isFavourite }
            : country
        )
      );
    } else {
      setCountry([...countries, { id, isFavourite: true }]);
    }
  }

  return (
    <>
      {" "}
      <GlobalStyle />
      <AppName />
      <NavBar />
      <Component
        {...pageProps}
        isCurrentCountry={isCurrentCountry}
        setIsCurrentCountry={setIsCurrentCountry}
        countries={countries}
        deleteCountry={deleteCountry}
        toggleFavourite={toggleFavourite}
        submitNewCountry={submitNewCountry}
      />
    </>
  );
}
