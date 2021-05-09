import { Dispatch, ReactNode, SetStateAction } from "react";

import { ThemeColorsType } from "src/styles/themes/colors";

export type CustomThemeContextProps = {
  toggleTheme: () => void;
}

export type CustomThemeContextProviderProps = {
  children: ReactNode;
  theme: ThemeColorsType;
  setTheme: Dispatch<SetStateAction<ThemeColorsType>>;
}