import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import FormCountry from ".";

jest.mock("next/router", () => ({
  useRouter: () => ({ push: () => {} }),
}));
test("calls the onSubmit handler with inputs on submit", async () => {
  const user = userEvent.setup();
  const submitNewCountry = jest.fn();
  render(<FormCountry submitNewCountry={submitNewCountry} />);
  const nameInput = screen.getByLabelText("Land hinzufügen:");
  const submitButton = screen.getByText("Hinzufügen");
  await user.type(nameInput, "Polen");
  await user.click(submitButton);

  expect(submitNewCountry).toHaveBeenCalledWith("Polen");
});
