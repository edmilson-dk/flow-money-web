import { createContext, Dispatch, ReactNode, SetStateAction } from "react";
import { darkTheme, lightTheme, ThemeColorsType } from "src/styles/themes/colors";

type CustomThemeContext = {
  toggleTheme: () => void;
}

type CustomThemeContextProviderProps = {
  children: ReactNode;
  theme: ThemeColorsType;
  setTheme: Dispatch<SetStateAction<ThemeColorsType>>;
}

export const CustomThemeContext = createContext({} as CustomThemeContext);

export function CustomThemeContextProvider({ children, theme, setTheme }: CustomThemeContextProviderProps) {
  function toggleTheme() {
    setTheme(theme.title === "dark" 
      ? lightTheme 
      : darkTheme
    );
  }

  return (
    <CustomThemeContext.Provider value={{ toggleTheme }}>
      { children }
    </CustomThemeContext.Provider>
  );
}