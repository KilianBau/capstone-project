import GlobalStyle from "../styles";
import { initialCountries } from "@/lib/db";
import { useRouter } from "next/router";
import { useState } from "react";

export default function App({ Component, pageProps }) {
  const [countries, setCountry] = useState(initialCountries);
  const router = useRouter();
  function submitNewCountry(newCountry) {
    setCountry([...countries, newCountry]);
    router.push("/");
  }

  return (
    <>
      <GlobalStyle />
      <Component
        {...pageProps}
        countries={countries}
        submitNewCountry={submitNewCountry}
      />
    </>
  );
}
