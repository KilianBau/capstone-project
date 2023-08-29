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
      />
    </>
  );
}
