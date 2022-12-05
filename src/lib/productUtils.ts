import { IProduct } from "./interfaces";

/**
 * Function that handles helps determine how many stars (user rating) will be rendered in the UI.
 * @param rate number signifying user rating
 * @returns separated "base" and the "rest" in an obj for use in UI design (how many stars will be rendered)
 */
export function handleRatingStarsData({ rate }) {
  const base = Math.floor(rate);
  const rest = parseFloat((rate - base).toFixed(1));
  return { base, rest };
}

/**
 * Function that determines whether there should be a space between the text and the rendered stars (user rating) .
 * @param num number between 0.0 - 0.9
 * @returns result of validation
 */
export function isIndented(num: number) {
  return num >= 0.8 || num < 0.2;
}

/**
 * Function that randomly decides between "true" and "false". Mocks readiness of "prime" delivery.
 * @returns result of validation
 */
export function isPrime() {
  return Math.random() < 0.5;
}

/**
 * Function that creates a more complex product from separate inputs -> object of "final product".
 * @param product shorter/preview product, see IProduct props (e.g. title, desc, price...)
 * @param hasPrime has a "prime" delivery or not
 * @param quantity QT
 * @param totalPrice TP
 * @returns object of final product
 */
export function createFinalProduct(
  product: IProduct,
  hasPrime: boolean,
  quantity: number,
  totalPrice: number
) {
  return {
    id: product.id,
    title: product.title,
    price: product.price,
    description: product.description,
    category: product.category,
    image: product.image,
    rating: product.rating,
    prime: hasPrime,
    quantity: quantity,
    totalPrice: totalPrice,
  };
}
