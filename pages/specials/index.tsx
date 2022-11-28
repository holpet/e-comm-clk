import { useEffect, useState } from "react";
import { fetchRandomProducts } from "../../src/fetchers/products";
import ProductFeed from "../components/ProductFeed";
import { useRouter } from "next/router";

const MAX_NUM_OF_SPECIALS = 8;

export default function SpecialsPage() {
  const [randomProducts, setRandomProducts] = useState(null);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setLoading(true);
    fetchRandomProducts(MAX_NUM_OF_SPECIALS).then((productArray) => {
      if (productArray) setRandomProducts(productArray);
      else router.push("/");
    });
    setLoading(false);
  }, []);

  return <ProductFeed products={randomProducts} loading={loading} />;
}
