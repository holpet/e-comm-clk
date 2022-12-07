import { fetchAllProducts } from "../src/fetchers/products";
import Banner from "./components/Banner";
import HeaderAdvert from "./components/HeaderAdvert";
import Separator from "./components/partials/ui/Separator";
import ProductFeed from "./components/ProductFeed";

export default function HomePage({ data }) {
  return (
    <>
      <HeaderAdvert />
      <Banner category={false} />
      <Separator size={2} />
      <ProductFeed products={data} loading={false} />
    </>
  );
}

export async function getServerSideProps({ req, res }) {
  res.setHeader(
    "Cache-Control",
    "public, s-maxage=20, stale-while-revalidate=59"
  );
  let data = await fetchAllProducts();
  return {
    props: { data },
  };
}
