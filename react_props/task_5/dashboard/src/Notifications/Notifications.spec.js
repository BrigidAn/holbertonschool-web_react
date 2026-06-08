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

  test("always renders title text", () => {
    render(<Notifications />);
    expect(screen.getByText(/your notifications/i)).toBeInTheDocument();
  });

  test("does NOT show drawer when displayDrawer is false", () => {
    render(<Notifications displayDrawer={false} />);

    expect(
      screen.queryByText(/here is the list of notifications/i)
    ).not.toBeInTheDocument();

    expect(
      screen.queryByRole("button", { name: /close/i })
    ).not.toBeInTheDocument();

    expect(
      screen.queryByRole("listitem")
    ).not.toBeInTheDocument();
  });

  test("shows drawer when displayDrawer is true", () => {
    render(
      <Notifications
        displayDrawer={true}
        notifications={notificationsList}
      />
    );

    expect(
      screen.getByText(/here is the list of notifications/i)
    ).toBeInTheDocument();

    expect(
      screen.getByRole("button", { name: /close/i })
    ).toBeInTheDocument();

    expect(screen.getAllByRole("listitem").length).toBe(3);
  });

  test("shows empty message when no notifications", () => {
    render(<Notifications displayDrawer={true} notifications={[]} />);

    expect(
      screen.getByText(/no new notification for now/i)
    ).toBeInTheDocument();
  });

  test("close button logs message", () => {
    const consoleSpy = jest.spyOn(console, "log").mockImplementation();

    render(
      <Notifications
        displayDrawer={true}
        notifications={notificationsList}
      />
    );

    fireEvent.click(screen.getByRole("button", { name: /close/i }));

    expect(consoleSpy).toHaveBeenCalledWith(
      "Close button has been clicked"
    );

    consoleSpy.mockRestore();
  });
});