import { initialCountries } from "@/lib/db";
import DetailCountry from ".";
import { render, screen } from "@testing-library/react";

jest.mock("next/router", () => ({
  useRouter: () => ({ query: { detailCountry: "Niederlande" } }),
}));

test("renders the country name", () => {
  render(<DetailCountry currentCountry={initialCountries} />);
  const heading = screen.getByRole("heading", { name: "Reisezeitraum:" });
  expect(heading).toBeInTheDocument();
});
