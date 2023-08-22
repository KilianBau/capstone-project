import FavouritePage from "@/components/FavouritePage";

export default function Favourite({ countries, toggleFavourite }) {
  return (
    <FavouritePage countries={countries} toggleFavourite={toggleFavourite} />
  );
}
