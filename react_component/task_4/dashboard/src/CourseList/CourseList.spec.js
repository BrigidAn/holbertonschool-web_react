import { render, screen } from "@testing-library/react";
import CourseList from "./CourseList";

const courses = [
  { id: 1, name: "ES6", credit: 60 },
  { id: 2, name: "Webpack", credit: 20 },
  { id: 3, name: "React", credit: 40 },
];

describe("CourseList", () => {
  test("renders 5 rows when courses exist", () => {
    render(<CourseList courses={courses} />);

    const rows = screen.getAllByRole("row");
    expect(rows.length).toBe(5); // 2 header + 3 courses
  });

  test("renders 1 row when courses is empty", () => {
    render(<CourseList courses={[]} />);

    const rows = screen.getAllByRole("row");
    expect(rows.length).toBe(3); // header rows + empty message row
  });
});