import Card from "@/components/Card";

export default function HomePage({ countries, toggleFavourite }) {
  return (
    <>
      <Card countries={countries} toggleFavourite={toggleFavourite} />
    </>
  );
}
