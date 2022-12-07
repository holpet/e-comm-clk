import { useEffect, useState } from "react";
import { fetchRandomProducts } from "../../src/fetchers/products";
import ProductFeed from "../components/ProductFeed";
import { useRouter } from "next/router";
import CategoryLinker from "../components/partials/category/CategoryLinker";
import HeaderAdvert from "../components/HeaderAdvert";
import Loading from "../components/partials/ui/Loading";

const MAX_NUM_OF_SPECIALS = 8;

export default function SpecialsPage() {
  const [randomProducts, setRandomProducts] = useState(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    fetchRandomProducts(MAX_NUM_OF_SPECIALS).then((productArray) => {
      if (productArray) setRandomProducts(productArray);
      else router.push("/");
      setLoading(false);
    });
  }, []);

  return (
    <>
      {loading && <Loading fullScreen={false} search={false} />}
      <HeaderAdvert />
      <CategoryLinker />
      <ProductFeed products={randomProducts} loading={loading} />
    </>
  );
}
