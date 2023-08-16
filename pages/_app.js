import GlobalStyle from "../styles";
import { initialCountries } from "@/lib/db";
import { useRouter } from "next/router";
import { useState } from "react";
import { uid } from "uid";

export default function App({ Component, pageProps }) {
  const [isCountry, setCountry] = useState(initialCountries);
  const router = useRouter();
  function submitNewCountry(country) {
    const newCountries = {
      id: uid(),
      name: country,
    };

    setCountry([...isCountry, newCountries]);
    router.push("/");
  }

  return (
    <>
      <GlobalStyle />
      <Component
        {...pageProps}
        isCountry={isCountry}
        submitNewCountry={submitNewCountry}
      />
    </>
  );
}
