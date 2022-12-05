import { SessionProvider } from "next-auth/react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import getRdxUtils from "../src/app/store";
import "../styles/globals.css";
import Layout from "./components/layout/Layout";
import Loading from "./components/partials/ui/Loading";
import type { AppProps } from "next/app";

function App({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <SessionProvider session={session}>
      <Provider store={getRdxUtils().store}>
        <PersistGate
          loading={<Loading fullScreen={true} />}
          persistor={getRdxUtils().persistor}
        >
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </PersistGate>
      </Provider>
    </SessionProvider>
  );
}

export default App;
