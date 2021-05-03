import { Container } from "src/styles/components/Container";
import { ServicesContainer, ServicesWrapper } from "src/styles/components/Home/Services";
import { TitleSecondary } from "src/styles/components/titles";
import { ServiceBox } from "./ServiceBox";

export function Services() {
  return (
    <ServicesWrapper>
      <Container>
        <TitleSecondary>Nossos serviços</TitleSecondary>
        <ServicesContainer>
          <ServiceBox 
            title="Gráfico de crescimento financeiro"
            imgSrc="/svg/increase.svg"
            imgAlt="Gráfico de crescimento financeiro"
          />
          <ServiceBox 
            title="Gráfico de crescimento financeiro"
            imgSrc="/svg/decrease.svg"
            imgAlt="Gráfico de crescimento financeiro"
          />
          <ServiceBox 
            title="Gráfico de crescimento financeiro"
            imgSrc="/svg/bank.svg"
            imgAlt="Gráfico de crescimento financeiro"
          />
          <ServiceBox 
            title="Gráfico de crescimento financeiro"
            imgSrc="/svg/job.svg"
            imgAlt="Gráfico de crescimento financeiro"
          />
        </ServicesContainer>
      </Container>
    </ServicesWrapper>
  );
}