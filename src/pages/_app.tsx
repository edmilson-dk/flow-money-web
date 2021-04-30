import { AppProps } from "next/app";

import GlobalStyle from "src/styles/globalStyles";
import { Theme } from "src/styles/themes";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Theme>
      <GlobalStyle />
      <Component {...pageProps} />
    </Theme>
  );
}