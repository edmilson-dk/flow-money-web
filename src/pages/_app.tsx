import { AppProps } from 'next/app';

import GlobalStyle from 'src/styles/globalStyles';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  )
}