import {
  getCurrentYear,
  getFooterCopy,
  getLatestNotification,
} from "./utils";

describe("Utils functions", () => {
  test("getCurrentYear returns current year", () => {
    const year = new Date().getFullYear();
    expect(getCurrentYear()).toBe(year);
  });

  test("getFooterCopy returns correct string when isIndex is true", () => {
    expect(getFooterCopy(true)).toBe("Holberton School");
  });

  test("getFooterCopy returns correct string when isIndex is false", () => {
    expect(getFooterCopy(false)).toBe(
      "Holberton School main dashboard"
    );
  });

  test("getLatestNotification returns correct HTML string", () => {
    expect(getLatestNotification()).toBe(
      "<strong>Urgent requirement</strong> - complete by EOD"
    );
  });
});