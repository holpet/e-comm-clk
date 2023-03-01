import { IProduct } from "./interfaces";

export function getClosestQuery(
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

export function getSimplifiedQuery(query: string): string[] {
  return query
    .toLowerCase()
    .replaceAll(/[^a-z0-9 -]/gi, "")
    .split(" ");
}

//TODO: further search optimization
export function rateMatch(oldQuery: string, newQuery: string) {
  let oldArray = getSimplifiedQuery(oldQuery);
  let newArray = getSimplifiedQuery(newQuery);
  if (newArray.length < oldArray.length) {
    let tmp = oldArray;
    oldArray = newArray;
    newArray = tmp;
  }
  for (let i = 0; i < newArray.length; i++) {}
}
