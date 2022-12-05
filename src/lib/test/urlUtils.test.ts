import {
  getPathFromCategory,
  getPathFromId,
  getCategoryFromPath,
  isValidPath,
  getQueryFromName,
} from "../urlUtils";
import { CATEGORY, CATEGORY_PATH } from "../constants";

test("takes in a category and returns a string representing the path to said category", () => {
  expect(getPathFromCategory(CATEGORY.ELECTRO)).toBe(CATEGORY_PATH.ELECTRO);
  expect(getPathFromCategory("somethingUnexpected")).toBe("/");
});

test("takes in an ID and returns a string representing path to a singular product", () => {
  expect(
    getPathFromId(CATEGORY.ELECTRO, "Unusual pencil with eraser", 58)
  ).toBe(`/category/other/electronics/unusual-pencil-with-eraser-d58`);
});

test("takes in a path (in the form of 'router.query' -> array) and returns the proper category name", () => {
  expect(getCategoryFromPath(["women", "clothing"])).toBe("Women's Clothing");
  expect(getCategoryFromPath([])).toBe("");
  expect(getCategoryFromPath(["somethingUnexpected"])).toBe("");
  expect(getCategoryFromPath([undefined])).toBe("");
});

test("determines whether given path (in the form of 'router.query' -> array) is valid and will return requested data", () => {
  expect(isValidPath(["women", "clothing"])).toBe(true);
  expect(isValidPath(["electronics", "clothing"])).toBe(false);
  expect(isValidPath(["women", undefined])).toBe(false);
  expect(isValidPath([undefined, undefined])).toBe(false);
  expect(isValidPath([])).toBe(false);
});

test("exchanges special chars in a string for symbols commonly used in url reqs", () => {
  expect(
    getQueryFromName("Unusual Pencil/Eraser -- serves as 50GB USB, now")
  ).toBe("unusual-pencil-eraser----serves-as-50gb-usb--now");
});
