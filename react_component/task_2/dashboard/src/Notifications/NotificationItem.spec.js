import { render, fireEvent } from "@testing-library/react";
import NotificationItem from "./NotificationItem";

test("calls markAsRead when clicked", () => {
  const markAsReadMock = jest.fn();

  const { container } = render(
    <NotificationItem
      id={1}
      type="default"
      value="Test notification"
      markAsRead={markAsReadMock}
    />
  );

  fireEvent.click(container.querySelector("li"));

  expect(markAsReadMock).toHaveBeenCalledWith(1);
});