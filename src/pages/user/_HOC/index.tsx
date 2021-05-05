import { useContext } from "react";
import { Header } from "src/components/Home/generic/Header"
import { CustomThemeContext } from "src/contexts/CustomThemeContext";
import { Container } from "src/styles/components/Container";
import { UserFormAuthHocContainer, UserFormAuthHocWrapper } from "src/styles/pages/user/HOC";

export default function UserFormAuthHoc(WrappedComponent: any) {
  return () => {
    const { toggleTheme } = useContext(CustomThemeContext);

    return (
      <>
        <Header 
          toggleTheme={toggleTheme}
          buttonText="Home"
          buttonRouter="/"
        />
        <UserFormAuthHocWrapper>
          <Container>
            <UserFormAuthHocContainer>
              <WrappedComponent />
            </UserFormAuthHocContainer>
          </Container>
        </UserFormAuthHocWrapper>
      </>
    );
  };
}