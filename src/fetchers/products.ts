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

/* FETCH SEARCHED/QUERIED PRODUCTS */
export async function fetchQueriedProducts(query: string) {
  const controller = new AbortController();
  try {
    let { data } = await searchClient.get(`search?q=${query}`, {
      signal: controller.signal,
    });

    return data;
  } catch (error) {
    console.log(error);
  }
  controller.abort();
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
