import { initialCountries } from "@/lib/db";
import DetailCountry from ".";
import { render, screen } from "@testing-library/react";
import DetailCountryPage from "@/pages/Subpages/[detailCountry]";

jest.mock("next/router", () => ({
  useRouter: () => ({ query: { detailCountry: "England" } }),
}));

test("renders the country name", () => {
  render(<DetailCountry countries={initialCountries} />);
  const cardEngland = screen.getByText("England");
  expect(cardEngland).toBeInTheDocument();
});
