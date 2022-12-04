import type { NextApiRequest, NextApiResponse } from "next";
import { fetchAllProducts } from "../../../src/fetchers/products";
import { IProduct } from "../../../src/lib/interfaces";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const query = req.query.q;
  const products = await fetchAllProducts();

  if (typeof query !== "string") return;
  const queriedArray = products.filter((product: IProduct) => {
    return (
      product.title.toLowerCase().includes(query.toLowerCase()) ||
      product.description.toLowerCase().includes(query.toLowerCase()) ||
      product.category.toLowerCase().includes(query.toLowerCase())
    );
  });
  res.status(200).json(queriedArray);
};
