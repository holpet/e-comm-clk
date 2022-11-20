import { SessionProvider } from "next-auth/react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import getRdxUtils from "../src/app/store";
import "../styles/globals.css";
import Loading from "./components/partials/ui/Loading";

function App({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <SessionProvider session={session}>
      <Provider store={getRdxUtils().store}>
        <PersistGate loading={<Loading />} persistor={getRdxUtils().persistor}>
          <Component {...pageProps} />
        </PersistGate>
      </Provider>
    </SessionProvider>
  );
}

export default App;
