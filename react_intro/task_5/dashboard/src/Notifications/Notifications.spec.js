import { render, screen, fireEvent } from "@testing-library/react";
import Notifications from "./Notifications";

describe("Notifications component", () => {
  test("renders notifications title", () => {
    render(<Notifications />);

    expect(
      screen.getByText(/here is the list of notifications/i)
    ).toBeInTheDocument();
  });

  test("renders close button", () => {
    render(<Notifications />);

    const button = screen.getByRole("button", {
      name: /close/i,
    });

    expect(button).toBeInTheDocument();
  });

  test("renders 3 notification items", () => {
    render(<Notifications />);

    const items = screen.getAllByRole("listitem");
    expect(items.length).toBe(3);
  });

  test("clicking close button logs message", () => {
    const consoleSpy = jest.spyOn(console, "log").mockImplementation();

    render(<Notifications />);

    const button = screen.getByRole("button", {
      name: /close/i,
    });

    fireEvent.click(button);

    expect(consoleSpy).toHaveBeenCalledWith(
      "Close button has been clicked"
    );

    consoleSpy.mockRestore();
  });
});