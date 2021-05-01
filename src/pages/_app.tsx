import { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";

import { useCustomTheme } from "src/hooks/useCustomTheme";

import GlobalStyle from "src/styles/globalStyles";
import { darkTheme, defaultColors, lightTheme } from "src/styles/themes/colors";
import { Header } from "src/components/generic/Header";

export default function App({ Component, pageProps }: AppProps) {
  const [ theme, setTheme ] = useCustomTheme("@theme", lightTheme);

  function toggleTheme() {
    setTheme(theme.title === "dark" 
      ? { ...lightTheme, ...defaultColors } 
      : { ...darkTheme, ...defaultColors }
    );
  }

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}