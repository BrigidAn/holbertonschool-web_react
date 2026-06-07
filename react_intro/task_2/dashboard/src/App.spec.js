import { render, screen } from "@testing-library/react";
import App from "./App";

describe("App component", () => {
  test("renders heading", () => {
    render(<App />);

    const heading = screen.getByRole("heading", {
      name: /school dashboard/i,
    });

    expect(heading).toBeInTheDocument();
  });

  test("renders login paragraph", () => {
    render(<App />);

    expect(
      screen.getByText(/login to access the full dashboard/i)
    ).toBeInTheDocument();
  });

  test("renders logo image", () => {
    render(<App />);

    expect(
      screen.getByAltText(/holberton logo/i)
    ).toBeInTheDocument();
  });

  /* ✅ NEW TESTS FOR TASK 2 */

  test("renders email and password inputs", () => {
    render(<App />);

    const emailInput = screen.getByRole("textbox", {
      name: /email/i,
    });

    const passwordInput = screen.getByLabelText(/password/i);

    expect(emailInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
  });

  test("renders email and password labels", () => {
    render(<App />);

    expect(screen.getByText(/email/i)).toBeInTheDocument();
    expect(screen.getByText(/password/i)).toBeInTheDocument();
  });

  test("renders OK button", () => {
    render(<App />);

    const button = screen.getByRole("button", {
      name: /ok/i,
    });

    expect(button).toBeInTheDocument();
  });
});