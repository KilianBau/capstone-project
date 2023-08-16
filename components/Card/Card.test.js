import { render, screen } from "@testing-library/react";
import Card from ".";
import { initialCountries } from "@/lib/db";

test("renders the countries england and australia", () => {
  render(<Card countries={initialCountries} />);
  const cardEngland = screen.getByText("England");
  expect(cardEngland).toBeInTheDocument();

  const cardAustralia = screen.getByText("Australien");
  expect(cardAustralia).toBeInTheDocument();
});
