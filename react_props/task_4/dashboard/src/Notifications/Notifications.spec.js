import { render, screen, fireEvent } from "@testing-library/react";
import Notifications from "./Notifications";

const notificationsList = [
  { id: 1, type: "default", value: "New course available" },
  { id: 2, type: "urgent", value: "New resume available" },
  {
    id: 3,
    type: "urgent",
    html: { __html: "<strong>Urgent requirement</strong> - complete by EOD" }
  }
];

describe("Notifications component", () => {

  test("renders notifications title", () => {
    render(<Notifications notifications={notificationsList} />);

    expect(
      screen.getByText(/here is the list of notifications/i)
    ).toBeInTheDocument();
  });

  test("renders close button", () => {
    render(<Notifications notifications={notificationsList} />);

    const button = screen.getByRole("button", {
      name: /close/i,
    });

    expect(button).toBeInTheDocument();
  });

  test("renders 3 notification items", () => {
    render(<Notifications notifications={notificationsList} />);

    const items = screen.getAllByRole("listitem");
    expect(items.length).toBe(3);
  });

  test("clicking close button logs message", () => {
    const consoleSpy = jest.spyOn(console, "log").mockImplementation();

    render(<Notifications notifications={notificationsList} />);

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