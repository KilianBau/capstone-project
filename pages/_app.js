import AppName from "@/components/AppName";
import GlobalStyle from "../styles";
import { initialCountries } from "@/lib/db";
import { useRouter } from "next/router";
import useLocalStorageState from "use-local-storage-state";
import NavBar from "@/components/NavBar";

export default function App({ Component, pageProps }) {
  const [countries, setCountry] = useLocalStorageState("countries", {
    defaultValue: initialCountries,
  });
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
      <GlobalStyle />
      <AppName />
      <NavBar />
      <Component
        {...pageProps}
        countries={countries}
        submitNewCountry={submitNewCountry}
        deleteCountry={deleteCountry}
        toggleFavourite={toggleFavourite}
      />
    </>
  );
}
