import { render, screen } from "@testing-library/react";
import CountryForm from ".";

test("shows the input", async () => {
  render(<CountryForm />);
  const nameInput = screen.getByLabelText("Land hinzufügen:");

  expect(nameInput).toBeInTheDocument();
});
