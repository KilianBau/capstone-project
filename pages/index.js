import Card from "@/components/Card";
import NavBar from "@/components/NavBar";

export default function HomePage({ countries, toggleFavourite }) {
  return (
    <>
      <Card countries={countries} toggleFavourite={toggleFavourite} />
    </>
  );
}
