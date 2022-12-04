import axios from "axios";

const productClient = axios.create({
  baseURL: "https://fakestoreapi.com/products/",
});

export const searchClient = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_URL}api/`,
});

export default productClient;
