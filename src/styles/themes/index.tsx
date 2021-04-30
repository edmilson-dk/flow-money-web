import { ReactNode } from "react";
import { ThemeProvider } from "styled-components";
import { defaultColors, light } from "./colors";

export const theme = {
  ...light,
  ...defaultColors,
};

type ThemeProps = {
  children: ReactNode;
};

export function Theme({ children }: ThemeProps) {
  return (
    <ThemeProvider theme={theme}>
      { children }
    </ThemeProvider>
  );
}