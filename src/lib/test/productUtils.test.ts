import {
  handleRatingStarsData,
  isIndented,
  isPrime,
  createFinalProduct,
} from "../productUtils";

test("takes in a float number signifying rating and separates it into an int base and 0.x float rest", () => {
  expect(handleRatingStarsData({ rate: 5.5 })).toStrictEqual({
    base: 5,
    rest: 0.5,
  });
});

test("checks whether text should be spaced from the *star rating* - function purely for UI reasons", () => {
  expect(isIndented(0.5)).toBe(false);
  expect(isIndented(0.1)).toBe(true);
  expect(isIndented(0.9)).toBe(true);
});

test("randomly decides between 'true' or 'false'", () => {
  isPrime();
  const mockMath = Object.create(global.Math);
  mockMath.random = () => 0.5;
  global.Math = mockMath;
});

const product = {
  id: 1,
  title: "Pencil and Eraser",
  price: 155,
  description: "Great for writing and erasing said writing.",
  category: "Enough said.",
  image: "http://someurl.com/image.jpg",
  rating: {
    rate: 4.3,
    count: 15,
  },
};

test("creates a more complex object 'product' from input", () => {
  expect(createFinalProduct(product, true, 2, 310)).toStrictEqual({
    id: 1,
    title: "Pencil and Eraser",
    price: 155,
    description: "Great for writing and erasing said writing.",
    category: "Enough said.",
    image: "http://someurl.com/image.jpg",
    rating: {
      rate: 4.3,
      count: 15,
    },
    prime: true,
    quantity: 2,
    totalPrice: 310,
  });
});
