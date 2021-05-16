import { ServiceBoxWrapper } from "src/styles/components/Home/Services/ServiceBox";
import { ServiceBoxProps } from "./types";

export function ServiceBox({ title, imgSrc, imgAlt }: ServiceBoxProps) {
  return (
    <ServiceBoxWrapper>
      <img src={imgSrc} alt={imgAlt}/>
      <h3>{ title }</h3>
    </ServiceBoxWrapper>
  );
}