import type { NextApiRequest, NextApiResponse } from "next";
import tags from "../../../src/lib/itemTagsCollection";
import { fetchOneProductById } from "../../../src/fetchers/products";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  //console.time("b");
  const query = req.query.q;
  if (typeof query !== "string") return;

  // filter results from a doc on internal server
  const arrayWithMatches = tags.filter((item) => {
    return (
      item.title.toLowerCase().includes(query.toLowerCase()) ||
      item.description.toLowerCase().includes(query.toLowerCase()) ||
      item.category.toLowerCase().includes(query.toLowerCase())
    );
  });

  // fetch matching items (full product details) from external server using id
  const queriedArray = await Promise.all(
    arrayWithMatches.map((item) => {
      return fetchOneProductById(item.id.toString());
    })
  );

  //console.timeEnd("b");

  res.status(200).json(queriedArray);
};
