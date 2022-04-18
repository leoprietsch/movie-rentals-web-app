import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "../components/Layout";

function App({ Component, pageProps }: AppProps) {
  return <Layout child={<Component {...pageProps} />} />;
}

export default App;