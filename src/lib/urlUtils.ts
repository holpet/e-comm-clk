import { CATEGORY, CATEGORY_PATH, PRIMARY_CATEGORY_TAG } from "./constants";

export function getPathFromCategory(category: string) {
  switch (category.toLowerCase()) {
    case CATEGORY.MEN_CLOTHING.toLowerCase():
      return CATEGORY_PATH.MEN_CLOTHING;
    case CATEGORY.WOMEN_CLOTHING.toLowerCase():
      return CATEGORY_PATH.WOMEN_CLOTHING;
    case CATEGORY.JEWELERY.toLowerCase():
      return CATEGORY_PATH.JEWELERY;
    case CATEGORY.ELECTRO.toLowerCase():
      return CATEGORY_PATH.ELECTRO;
    default:
      return "/";
  }
}

export function getCategoryFromPath(path: Array<string>) {
  switch (path[0]) {
    case PRIMARY_CATEGORY_TAG.MEN:
      return CATEGORY.MEN_CLOTHING;
    case PRIMARY_CATEGORY_TAG.WOMEN:
      return CATEGORY.WOMEN_CLOTHING;
    case PRIMARY_CATEGORY_TAG.JEWELERY:
      return CATEGORY.JEWELERY;
    case PRIMARY_CATEGORY_TAG.ELECTRO:
      return CATEGORY.ELECTRO;
    default:
      return "";
  }
}

export function isValidPath(path: Array<string>) {
  var valid = false;
  Object.values(PRIMARY_CATEGORY_TAG).forEach((tag) => {
    if (tag === path[0]) {
      valid = true;
      return;
    }
  });
  return valid;
}
