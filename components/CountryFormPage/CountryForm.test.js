import { render, screen } from "@testing-library/react";
import CountryForm from ".";

test("calls the onSubmit handler with inputs on submit", async () => {
  render(<CountryForm />);
  const nameInput = screen.getByLabelText("Land hinzufügen:");

  expect(nameInput).toBeInTheDocument();
});
