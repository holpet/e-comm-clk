import { IProduct } from "./interfaces";

export function handleRatingStarsData({ rate }) {
  const base = Math.floor(rate);
  const rest = rate - base;
  return { base, rest };
}

export function isIndented(num: number) {
  return num >= 0.8 || num < 0.2;
}

export function isPrime() {
  return Math.random() < 0.5;
}

export function createFinalProduct(
  product: IProduct,
  hasPrime: Boolean,
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
