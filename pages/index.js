import Card, { ErrorMessage } from "@/components/Card";

export default function HomePage({ countries, toggleFavourite }) {
  try {
    if (!countries || countries.length === 0) {
      throw new Error("Keine Länder gefunden!");
    }
    return (
      <>
        <Card countries={countries} toggleFavourite={toggleFavourite} />
      </>
    );
  } catch (error) {
    return <ErrorMessage>{error.message}</ErrorMessage>;
  }
}
