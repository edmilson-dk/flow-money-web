import { BgCircle } from "src/styles/components/BgCircle";
import { Container } from "src/styles/components/Container";
import { BannerContainer, BannerWrapper } from "src/styles/components/Home/Banner";
import { TitlePrimary } from "src/styles/components/titles";
import { Button } from "../generic/Button";

export function Banner() {
  return (
    <BannerWrapper>
      <Container>
        <BannerContainer>
          <article>
            <TitlePrimary>Gerencie suas finanças, simples e fácil</TitlePrimary>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer.</p>
            <Button 
              isRouterButton={true} 
              routerButton="/user/register" 
              text="Começar"
            />
          </article>
          <div>
            <img src="/png/bg-banner.png" alt="Flow money" />
          </div>
        </BannerContainer>
      </Container>
      <BgCircle />
    </BannerWrapper>
  );
}