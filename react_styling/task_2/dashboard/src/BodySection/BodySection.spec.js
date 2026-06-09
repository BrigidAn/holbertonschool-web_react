import { render, screen } from "@testing-library/react";
import BodySection from "./BodySection";

describe("BodySection", () => {
  test("renders heading with title prop", () => {
    render(
      <BodySection title="test title">
        <p>test content</p>
      </BodySection>
    );

    expect(
      screen.getByRole("heading", {
        name: "test title",
      })
    ).toBeInTheDocument();
  });

  test("renders children", () => {
    render(
      <BodySection title="test">
        <p>child paragraph</p>
        <span>child span</span>
      </BodySection>
    );

    expect(
      screen.getByText("child paragraph")
    ).toBeInTheDocument();

    expect(
      screen.getByText("child span")
    ).toBeInTheDocument();
  });
});