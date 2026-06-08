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

  test("App renders without crashing", () => {
    render(<App />);
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

  test("renders email and password inputs", () => {
    render(<App />);

    expect(screen.getByRole("textbox", { name: /email/i })).toBeInTheDocument();
    expect(screen.getByLabelText(/password/i)).toBeInTheDocument();
  });

  test("renders email and password labels", () => {
    render(<App />);

    expect(screen.getByText(/email/i)).toBeInTheDocument();
    expect(screen.getByText(/password/i)).toBeInTheDocument();
  });

  test("renders OK button", () => {
    render(<App />);

    expect(
      screen.getByRole("button", { name: /ok/i })
    ).toBeInTheDocument();
  });
});