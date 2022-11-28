import HeaderMenu from "../HeaderMenu";
import Footer from "../Footer";
import Head from "next/head";

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>CLK SHOP</title>
      </Head>
      <main>
        <div className="content">
          <HeaderMenu />
          <div>{children}</div>
        </div>
        <Footer />
      </main>
    </>
  );
}
