import client from "../src/axios";
import Banner from "./components/Banner";
import HeaderMenu from "./components/HeaderMenu";
import HeaderAdvert from "./components/HeaderAdvert";
import Separator from "./components/partials/ui/Separator";
import ProductFeed from "./components/ProductFeed";
import Footer from "./components/Footer";
import Head from "next/head";

export default function Home({ data }) {
  return (
    <>
      <Head>
        <title>CLKSHOP</title>
      </Head>
      <main>
        <HeaderMenu />
        <HeaderAdvert />
        <Banner />
        <Separator size={2} />
        <ProductFeed products={data} />
        <Footer />
      </main>
    </>
  );
}

export async function getServerSideProps() {
  let { data } = await client.get("products", { withCredentials: true });
  return {
    props: { data },
  };
}
