import "../styles/globals.css";
import type { AppProps } from "next/app";
import images from "./imagesComp";

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
