import { render, screen } from "@testing-library/react";
import AppName from ".";

test("renders the heading TripPic", () => {
  render(<AppName />);
  const heading = screen.getByRole("heading", { name: "TripPic" });
  expect(heading).toBeInTheDocument();
});
