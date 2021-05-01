import { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";

import GlobalStyle from "src/styles/globalStyles";
import { CustomThemeContextProvider } from "src/contexts/CustomThemeContext";
import { useCustomTheme } from "src/hooks/useCustomTheme";
import { lightTheme } from "src/styles/themes/colors";

export default function App({ Component, pageProps }: AppProps) {
  const [ theme, setTheme ] = useCustomTheme("@theme", lightTheme);

  return (
    <CustomThemeContextProvider theme={theme} setTheme={setTheme}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </CustomThemeContextProvider>
  );
}