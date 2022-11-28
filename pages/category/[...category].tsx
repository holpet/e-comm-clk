import ProductFeed from "../components/ProductFeed";
import { useEffect, useState } from "react";
import { fetchProductsByCategory } from "../../src/fetchers/products";
import { getCategoryFromPath, isValidPath } from "../../src/lib/urlUtils";
import { useRouter } from "next/router";

export default function CategoryPage() {
  const router = useRouter();
  const [category, setCategory] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // validate router query
    if (!router.isReady) return;
    const queriedCategory = router.query.category;
    if (!Array.isArray(queriedCategory)) return;
    if (!isValidPath(queriedCategory)) {
      router.push("/category");
      return;
    }
    // fetch products
    const tags = getCategoryFromPath(queriedCategory);
    setLoading(true);
    fetchProductsByCategory(tags).then((data) => {
      if (data) setCategory(data);
      else router.push("/category");
    });
    setLoading(false);
  }, [router.isReady, router.query]);

  return <ProductFeed products={category} loading={loading} />;
}
