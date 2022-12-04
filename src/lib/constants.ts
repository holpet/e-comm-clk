export enum CATEGORY {
  MEN_CLOTHING = "Men's Clothing",
  WOMEN_CLOTHING = "Women's Clothing",
  JEWELERY = "Jewelery",
  ELECTRO = "Electronics",
}

export enum CATEGORY_PATH {
  MEN_CLOTHING = "/category/men/clothing",
  WOMEN_CLOTHING = "/category/women/clothing",
  JEWELERY = "/category/unisex/jewelery",
  ELECTRO = "/category/other/electronics",
}

export enum PRIMARY_CATEGORY_TAG {
  MEN = "men",
  WOMEN = "women",
  JEWELERY = "unisex",
  ELECTRO = "other",
}

export enum SECONDARY_CATEGORY_TAG {
  MEN = "clothing",
  WOMEN = "clothing",
  JEWELERY = "jewelery",
  ELECTRO = "electronics",
}

export const MAX_ID_AVAILABLE_ITEMS = 20;
export const MIN_ID_AVAILABLE_ITEMS = 1;
export const NUM_PROMO_IMG_DEFAULT = 4;
export const NUM_PROMO_IMG_CATEGORY = 1;
