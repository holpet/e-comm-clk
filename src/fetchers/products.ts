import {
  MAX_ID_AVAILABLE_ITEMS,
  MIN_ID_AVAILABLE_ITEMS,
} from "../lib/constants";
import {
  changeToQueryString,
  capToLimit,
  generateRandomNumberArray,
} from "./lib/fetchUtils";
import productClient, { searchClient } from "./axiosConfig";
import tags from "../lib/itemTagsCollection";
import { IProduct } from "../lib/interfaces";

/* FETCH ONE PRODUCT */
export async function fetchOneProductById(id: string) {
  const controller = new AbortController();
  try {
    let { data } = await productClient.get(`${id}`, {
      signal: controller.signal,
    });
    return data;
  } catch (error) {
    console.log(error);
  }
  controller.abort();
}

/* FETCH ALL PRODUCTS */
export async function fetchAllProducts() {
  const controller = new AbortController();
  try {
    let { data } = await productClient.get("", { signal: controller.signal });
    return data;
  } catch (error) {
    console.log(error);
  }
  controller.abort();
}

/* FETCH PRODUCTS by category */
export async function fetchProductsByCategory(category: string) {
  let categoryQuery = changeToQueryString(category);
  const controller = new AbortController();
  try {
    let { data } = await productClient.get(`category/${categoryQuery}`, {
      signal: controller.signal,
    });
    return data;
  } catch (error) {
    console.log(error);
  }
  controller.abort();
}

function getClosestQuery(
  newQuery: string,
  obj: { [query: string]: IProduct[] }
): IProduct[] {
  let closest = "";
  for (var key in obj) {
    if (newQuery.includes(key)) {
      closest = key.length > closest.length ? key : closest;
    }
  }
  return closest !== "" ? obj[closest] : [];
}

/* FETCH SEARCHED/QUERIED PRODUCTS */
export async function fetchQueriedProducts(
  query: string,
  cache: { [query: string]: IProduct[] }
) {
  if (cache.hasOwnProperty(query)) return cache[query];
  let products = getClosestQuery(query, cache);
  if (products.length === 0) products = await fetchAllProducts();

  const queriedArray = products.filter((item: IProduct) => {
    return (
      item.title.toLowerCase().includes(query.toLowerCase()) ||
      item.description.toLowerCase().includes(query.toLowerCase()) ||
      item.category.toLowerCase().includes(query.toLowerCase())
    );
  });

  return queriedArray;
}

/* FETCH RANDOM PRODUCTS (SPECIALS) */
export async function fetchRandomProducts(numOfRequestedProducts: number) {
  const limit = capToLimit(numOfRequestedProducts, MAX_ID_AVAILABLE_ITEMS);
  const randomNumArray = generateRandomNumberArray(
    limit,
    MIN_ID_AVAILABLE_ITEMS,
    MAX_ID_AVAILABLE_ITEMS
  );
  const controller = new AbortController();
  const signal = controller.signal;

  try {
    const productArray = await Promise.all(
      Array(limit)
        .fill(null)
        .map((_, i) =>
          productClient.get(`${randomNumArray[i]}`, {
            signal: signal,
          })
        )
    );
    let mappedArray = [];
    productArray.map((allData) => {
      mappedArray.push(allData.data);
    });
    return mappedArray;
  } catch (error) {
    console.log(error);
  }
  controller.abort();
}
