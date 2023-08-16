import AppName from "@/components/AppName";
import Card from "@/components/Card";

export default function HomePage({ countries }) {
  return (
    <>
      <AppName />
      <Card countries={countries} />
    </>
  );
}
