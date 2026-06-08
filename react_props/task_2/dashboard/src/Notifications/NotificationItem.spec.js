import { render } from "@testing-library/react";
import NotificationItem from "./NotificationItem";

describe("NotificationItem", () => {
  test("renders default notification", () => {
    const { container } = render(
      <NotificationItem type="default" value="test" />
    );

    const li = container.querySelector("li");

    expect(li).toHaveAttribute("data-notification-type", "default");
    expect(li).toHaveStyle("color: blue");
  });

  test("renders urgent notification", () => {
    const { container } = render(
      <NotificationItem type="urgent" value="test" />
    );

    const li = container.querySelector("li");

    expect(li).toHaveAttribute("data-notification-type", "urgent");
    expect(li).toHaveStyle("color: red");
  });
});