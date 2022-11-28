export function changeToQueryString(phrase: string) {
  return phrase.toLowerCase().replace(/'/g, "%27").replaceAll(" ", "%20");
}

export function capToLimit(numberOfProducts: number, max: number) {
  return Math.max(1, Math.min(numberOfProducts, max));
}

function getRandomNumInRange(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// generates an array of random numbers without repetition
export function generateRandomNumberArray(
  length: number,
  min: number,
  max: number
) {
  let array = [];
  for (let i = 0; i < length; i++) {
    const random = getRandomNumInRange(min, max);
    if (array.includes(random)) {
      i--;
      continue;
    } else {
      array.push(random);
    }
  }
  return array;
}
