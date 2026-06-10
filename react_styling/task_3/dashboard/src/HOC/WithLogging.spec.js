import React from "react";
import { render, screen, cleanup, waitFor } from "@testing-library/react";
import WithLogging from "./WithLogging";

afterEach(() => {
  cleanup();
});

class MockApp extends React.Component {
  render() {
    return <h1>Hello from Mock App Component</h1>;
  }
}

describe("WithLogging", () => {
  test("renders wrapped component", () => {
    const WrappedMockApp = WithLogging(MockApp);

    render(<WrappedMockApp />);

    expect(
      screen.getByText(/hello from mock app component/i),
    ).toBeInTheDocument();
  });

  test("logs mount message", async () => {
    const consoleSpy = jest.spyOn(console, "log").mockImplementation(() => {});

    const WrappedMockApp = WithLogging(MockApp);

    render(<WrappedMockApp />);

    await waitFor(() => {
      expect(consoleSpy).toHaveBeenCalledWith("Component MockApp is mounted");
    });

    consoleSpy.mockRestore();
  });

  test("logs unmount message", () => {
    const consoleSpy = jest.spyOn(console, "log").mockImplementation(() => {});

    const WrappedMockApp = WithLogging(MockApp);

    const { unmount } = render(<WrappedMockApp />);

    unmount();

    expect(consoleSpy).toHaveBeenCalledWith(
      "Component MockApp is going to unmount",
    );

    consoleSpy.mockRestore();
  });
});
