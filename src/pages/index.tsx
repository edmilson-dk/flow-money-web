import { useContext } from "react";
import { Header } from "src/components/generic/Header";
import { CustomThemeContext } from "src/contexts/CustomThemeContext";

export default function Home() {
  const { toggleTheme } = useContext(CustomThemeContext);

  return <Header toggleTheme={toggleTheme}/>
}