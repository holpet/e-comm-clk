import {
  CATEGORY,
  CATEGORY_PATH,
  PRIMARY_CATEGORY_TAG,
  SECONDARY_CATEGORY_TAG,
} from "./constants";

/**
 * Function that takes a category name and returns a relevant path to the page.
 * @param category category name, see constants CATEGORY
 * @returns valid path based on the corresponding category
 */
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

/**
 * Function that takes several product properties and return a path to a single product page.
 * @param category -//-
 * @param title -//-
 * @param id -//-
 * @returns a path to a single product page
 */
export function getPathFromId(category: string, title: string, id: number) {
  return `${getPathFromCategory(category)}/${getQueryFromName(title)}-d${id}`;
}

/**
 * Function that turns path into category.
 * @param path resulting array of tags from @next/router (router.query.category)
 * @returns the name of the corresponding category
 */
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

/**
 * Function that determines whether the requested category path (e.g. ['women', 'somethingsomething'] ) is valid or not.
 * "somethingsomething" is not valid, because it's not included in PRIMARY_CATEGORY_TAG, see constants -> PRIMARY_CATEGORY_TAG.
 * @param path resulting array of tags from @next/router (router.query.category)
 * @returns boolean validation of the path
 */
export function isValidPath(path: Array<string>) {
  let valid = false;
  Object.values(PRIMARY_CATEGORY_TAG).forEach((tag) => {
    if (tag === path[0]) {
      Object.values(SECONDARY_CATEGORY_TAG).forEach((tag2) => {
        if (tag2 === path[1]) {
          valid = true;
        }
      });
    }
  });
  return valid;
}

/**
 * Function that takes a name of product and transforms it into a string suitable for querying/path names.
 * @param name a name/title of the product
 * @returns path/query name used in creating final path to product
 */
export function getQueryFromName(name: string) {
  const path = name
    .replaceAll(" ", "-")
    .replaceAll("'", "")
    .replaceAll("/", "-")
    .replaceAll(",", "-")
    .toLowerCase();
  return path;
}
