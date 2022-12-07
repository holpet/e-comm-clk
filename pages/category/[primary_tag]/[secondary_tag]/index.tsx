import ProductFeed from "../../../components/ProductFeed";
import { useEffect, useState } from "react";
import { fetchProductsByCategory } from "../../../../src/fetchers/products";
import { getCategoryFromPath, isValidPath } from "../../../../src/lib/urlUtils";
import { useRouter } from "next/router";
import Banner from "../../../components/Banner";
import SeparatorInv from "../../../components/partials/ui/SeparatorInv";
import Separator from "../../../components/partials/ui/Separator";
import Loading from "../../../components/partials/ui/Loading";

export default function CategoryPage() {
  const router = useRouter();
  const [category, setCategory] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // validate router query
    if (!router.isReady || router.query === undefined) return;
    const queriedArray = [
      router.query.primary_tag.toString(),
      router.query.secondary_tag.toString(),
    ];
    if (!Array.isArray(queriedArray)) return;
    if (!isValidPath(queriedArray)) {
      router.push("/category");
      return;
    }
    // fetch products
    const tags = getCategoryFromPath(queriedArray);

    fetchProductsByCategory(tags).then((data) => {
      if (data) setCategory(data);
      else router.push("/category");
      setLoading(false);
    });
  }, [router.isReady, router.query]);

  return (
    <>
      {loading && <Loading fullScreen={false} search={false} />}
      <SeparatorInv size={2} />
      <Banner category={true} />
      <Separator size={2} />
      <ProductFeed products={category} loading={loading} />
    </>
  );
}
