import Link from "next/link"
import { useContext } from "react";
import { ThemeContext } from "styled-components";

import { Container } from "src/styles/components/Container";
import { HeaderWrapper, HeaderContainer } from "src/styles/components/generic/Header";

type HeaderProps = {
  toggleTheme: () => void;
}

export function Header({ toggleTheme }: HeaderProps) {
  const { title } = useContext(ThemeContext);

  return (
    <HeaderWrapper>
      <Container>
        <HeaderContainer>
          <div>
            <img src="/svg/logo.svg" alt="Flow Money Logo tipo" />
          </div>
          <nav>
            <button onClick={toggleTheme}>
              {
                title === "dark" ? (
                  <span>
                    <img src="/svg/theme-switch-light.svg" />
                  </span>
                ) : (
                  <span>
                    <img src="/svg/theme-switch-dark.svg" />
                  </span>
                )
              }
            </button>
            <Link href="/user/login">
              <a>Entrar</a>
            </Link>
          </nav>
        </HeaderContainer>
      </Container>
    </HeaderWrapper>
  );
}