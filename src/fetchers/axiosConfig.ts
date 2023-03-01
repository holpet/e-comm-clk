import axios from "axios";

const productClient = axios.create({
  baseURL: "https://fakestoreapi.com/products/",
});

export default productClient;
