import { Container } from "src/styles/components/Container";
import { HeaderContainer, HeaderWrapper } from "src/styles/components/Home/generic/Header";
import { Button } from "../Button";
import { SwitchThemeButton } from "src/components/generic/SwitchThemeButton";
import { useContext } from "react";
import { ThemeContext } from "styled-components";

type HeaderProps = {
  toggleTheme: () => void;
}

export function Header({ toggleTheme }: HeaderProps) {
  const { colors } = useContext(ThemeContext);
  
  return (
    <HeaderWrapper>
      <Container>
        <HeaderContainer>
          <div>
            <img src="/svg/logo.svg" alt="Flow Money Logo tipo" />
          </div>
          <nav>
            <SwitchThemeButton toggleTheme={toggleTheme}/>
            <Button
              isRouterButton={true}
              routerButton="/user/login"
              text="Entrar"
              bg={colors["pink-400"]}
            />
          </nav>
        </HeaderContainer>
      </Container>
    </HeaderWrapper>
  );
}