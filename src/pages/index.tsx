import { useContext } from "react";

import { Banner } from "src/components/Home/Banner";
import { Header } from "src/components/Home/generic/Header";
import { Services } from "src/components/Home/Services";
import { CustomThemeContext } from "src/contexts/CustomThemeContext";

export default function Home() {
  const { toggleTheme } = useContext(CustomThemeContext);

  return (
    <main>
      <Header 
        toggleTheme={toggleTheme}
        buttonText="Entrar"
        buttonRouter="/user/login"
      />
      <Banner />
      <Services />
    </main>
  );
}