import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";
import { Fragment } from "react";

describe("App component", () => {
  test("renders heading", () => {
    render(<App />);

    const heading = screen.getByRole("heading", {
      name: /school dashboard/i,
    });

    expect(heading).toBeInTheDocument();
  });

  test("App renders without crashing", () => {
    render(<App />);
  });

  test("renders login paragraph", () => {
    render(<App />);

    expect(
      screen.getByText(/login to access the full dashboard/i),
    ).toBeInTheDocument();
  });

  test("renders logo image", () => {
    render(<App />);

    expect(screen.getByAltText(/holberton logo/i)).toBeInTheDocument();
  });

  test("renders email and password inputs", () => {
    render(<App />);

    expect(screen.getByRole("textbox", { name: /email/i })).toBeInTheDocument();
    expect(screen.getByLabelText(/password/i)).toBeInTheDocument();
  });

  test("renders email and password labels", () => {
    render(<App />);

    expect(screen.getByText(/email/i)).toBeInTheDocument();
    expect(screen.getByText(/password/i)).toBeInTheDocument();
  });

  test("renders OK button", () => {
    render(<App />);

    expect(screen.getByRole("button", { name: /ok/i })).toBeInTheDocument();
  });

  test("renders Login when not logged in", () => {
    render(<App />);
    expect(screen.getByText(/login to access/i)).toBeInTheDocument();
  });

  test("renders CourseList when logged in", () => {
    const AppLogged = () => {
      return (
        <Fragment>
          <App />
        </Fragment>
      );
    };

    render(<AppLogged />);
  });

  test("renders CourseList when logged in", () => {
    const Applogged = () => {
      return (
        <Fragment>
          <App />
        </Fragment>
      );
    };
    render(<Applogged />);
  });
  test("calls logOut when ctrl + h is pressed", () => {
    const logOutMock = jest.fn();

    render(<App logOut={logOutMock} />);

    fireEvent.keyDown(document, {
      key: "h",
      ctrlKey: true,
    });

    expect(logOutMock).toHaveBeenCalledTimes(1);
  });
  test("displays alert when ctrl + h is pressed", () => {
    const alertMock = jest.spyOn(window, "alert").mockImplementation(() => {});

    render(<App />);

    fireEvent.keyDown(document, {
      key: "h",
      ctrlKey: true,
    });

    expect(alertMock).toHaveBeenCalledWith("Logging you out");

    alertMock.mockRestore();
  });
});
