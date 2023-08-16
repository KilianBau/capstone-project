import AppName from "@/components/AppName";
import Card from "@/components/Card";

export default function HomePage({ isCountry }) {
  return (
    <>
      <AppName />
      <Card isCountry={isCountry} />
    </>
  );
}
