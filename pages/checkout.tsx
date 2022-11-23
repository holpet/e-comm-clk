import HeaderMenu from "./components/HeaderMenu";
import Separator from "./components/partials/ui/Separator";

import Footer from "./components/Footer";
import Checkout from "./components/partials/checkout/Checkout";
import Head from "next/head";

export default function checkout() {
  return (
    <>
      <Head>
        <title>CLKSHOP - Checkout</title>
      </Head>
      <main>
        <div className="content">
          <HeaderMenu />
          <Separator size={3} />
          <Checkout />
        </div>
        <Footer />
      </main>
    </>
  );
}
