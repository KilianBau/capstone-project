import { ErrorMessage } from "@/components/Card";
import FavouritePage from "@/components/FavouritePage";
import Link from "next/link";

export default function Favourite({ countries, toggleFavourite }) {
  if (!countries || countries.length === 0) {
    return (
      <>
        <ErrorMessage>Error: Es ist kein Land vorhanden</ErrorMessage>
        <Link href={"/"}>Startseite</Link>{" "}
      </>
    );
  }

  const favouriteCountries = countries.filter(
    (country) => country.isFavourite === true
  );
  return (
    <FavouritePage
      favouriteCountries={favouriteCountries}
      toggleFavourite={toggleFavourite}
    />
  );
}
