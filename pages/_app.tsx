import { SessionProvider } from "next-auth/react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import getRdxUtils from "../src/app/store";
import "../styles/globals.css";
import Layout from "./components/layout/Layout";
import Loading from "./components/partials/ui/Loading";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";

function App({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  const router = useRouter();
  const noLayout = router.asPath.includes("signin");

  return (
    <SessionProvider session={session}>
      <Provider store={getRdxUtils().store}>
        <PersistGate
          loading={<Loading fullScreen={true} search={false} />}
          persistor={getRdxUtils().persistor}
        >
          {noLayout ? (
            <Component {...pageProps} />
          ) : (
            <Layout>
              <Component {...pageProps} />
            </Layout>
          )}
        </PersistGate>
      </Provider>
    </SessionProvider>
  );
}

export default App;
