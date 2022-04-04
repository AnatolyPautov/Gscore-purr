import "../styles/globals.css";
import type { AppProps } from "next/app";
import { createContext } from "react";
import { themes } from "../styles/colors";

function MyApp({ Component, pageProps }: AppProps) {
  const ThemeContext = createContext(themes);

  return (
    <ThemeContext.Provider value={themes}>
      <Component {...pageProps} />;
    </ThemeContext.Provider>
  );
}

export default MyApp;
