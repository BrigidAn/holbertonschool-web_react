import { render, screen } from "@testing-library/react";
import App from "./App";

describe("App component", () => {
  test("renders the School Dashboard heading", () => {
    render(<App />);

    const heading = screen.getByRole("heading", {
      name: /school dashboard/i,
    });

    expect(heading).toBeInTheDocument();
  });

  test("renders the body and footer paragraphs", () => {
    render(<App />);

    expect(
      screen.getByText(/login to access the full dashboard/i)
    ).toBeInTheDocument();

    const currentYear = new Date().getFullYear();

    expect(
      screen.getByText(
        new RegExp(
          `copyright ${currentYear} - holberton school`,
          "i"
        )
      )
    ).toBeInTheDocument();
  });

  test("renders the Holberton logo image", () => {
    render(<App />);

    const image = screen.getByAltText(/holberton logo/i);

    expect(image).toBeInTheDocument();
  });
});