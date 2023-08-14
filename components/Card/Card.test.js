import { render, screen } from "@testing-library/react";
import Card from ".";
import { countries } from "@/lib/db";

test("renders the countries Österreich and Australien", () => {
  render(<Card countries={countries} />);
  const cardÖsterreich = screen.getByText("Österreich");

  expect(cardÖsterreich).toBeInTheDocument();
  const cardAustralien = screen.getByText("Australien");

  expect(cardAustralien).toBeInTheDocument();
});
