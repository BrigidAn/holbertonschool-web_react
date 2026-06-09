import { render } from "@testing-library/react";
import BodySectionWithMarginBottom from "./BodySectionWithMarginBottom";

describe("BodySectionWithMarginBottom", () => {
  test("contains a div with class bodySectionWithMargin", () => {
    const { container } = render(
      <BodySectionWithMarginBottom title="test">
        <p>content</p>
      </BodySectionWithMarginBottom>
    );

    const div = container.querySelector(
      ".mb-10"
    );

    expect(div).toBeInTheDocument();
  });

  test("renders BodySection component", () => {
    const { container } = render(
      <BodySectionWithMarginBottom title="test title">
        <p>content</p>
      </BodySectionWithMarginBottom>
    );

    const bodySection =
      container.querySelector(".p-4");

    expect(bodySection).toBeInTheDocument();
  });
});