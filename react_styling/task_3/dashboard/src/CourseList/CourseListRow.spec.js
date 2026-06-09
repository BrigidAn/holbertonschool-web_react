import { render } from "@testing-library/react";
import CourseListRow from "./CourseListRow";

describe("CourseListRow", () => {
  test("header row with colspan=2", () => {
    const { container } = render(
      <table>
        <tbody>
          <CourseListRow isHeader={true} textFirstCell="Test" />
        </tbody>
      </table>
    );

    const th = container.querySelector("th");
    expect(th).toBeInTheDocument();
    expect(th.getAttribute("colspan")).toBe("2");
  });

  test("header row with two columns", () => {
    const { container } = render(
      <table>
        <tbody>
          <CourseListRow
            isHeader={true}
            textFirstCell="Col1"
            textSecondCell="Col2"
          />
        </tbody>
      </table>
    );

    const ths = container.querySelectorAll("th");
    expect(ths.length).toBe(2);
  });

  test("regular row renders td cells", () => {
    const { container } = render(
      <table>
        <tbody>
          <CourseListRow
            isHeader={false}
            textFirstCell="ES6"
            textSecondCell="60"
          />
        </tbody>
      </table>
    );

    const tds = container.querySelectorAll("td");
    expect(tds.length).toBe(2);
  });
});