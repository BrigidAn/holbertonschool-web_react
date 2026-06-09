import { render, fireEvent } from "@testing-library/react";
import Notifications from "./Notifications";

test("logs message when notification item is clicked", () => {
  const consoleSpy = jest
    .spyOn(console, "log")
    .mockImplementation(() => {});

  const notifications = [
    {
      id: 1,
      type: "default",
      value: "New course available",
    },
  ];

  const { container } = render(
    <Notifications
      displayDrawer={true}
      notifications={notifications}
    />
  );

  fireEvent.click(
    container.querySelector("li")
  );

  expect(consoleSpy).toHaveBeenCalledWith(
    "Notification 1 has been marked as read"
  );

  consoleSpy.mockRestore();
});

test("does not re-render when notifications length stays the same", () => {
  const instance = new Notifications({
    notifications: [
      { id: 1, type: "default", value: "test" },
    ],
  });

  const result = instance.shouldComponentUpdate({
    notifications: [
      { id: 2, type: "urgent", value: "another" },
    ],
  });

  expect(result).toBe(false);
});

test("re-renders when notifications length changes", () => {
  const instance = new Notifications({
    notifications: [
      { id: 1, type: "default", value: "test" },
    ],
  });

  const result = instance.shouldComponentUpdate({
    notifications: [
      { id: 1, type: "default", value: "test" },
      { id: 2, type: "urgent", value: "another" },
    ],
  });

  expect(result).toBe(true);
});