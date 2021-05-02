import Link from "next/link";
import { ButtonWrapper } from "src/styles/components/Home/generic/Button";

type ButtonProps = {
  isRouterButton: boolean;
  routerButton?: string;
  text: string;
  bg?: string;
}

export function Button({ isRouterButton, routerButton, text, bg }: ButtonProps) {
  return (
    <>
      {
        isRouterButton ? (
          <Link href={routerButton}>
            <ButtonWrapper bg={bg}>
              { text }
            </ButtonWrapper>
          </Link>
        ) : (
          <ButtonWrapper bg={bg}>
            { text }
          </ButtonWrapper>
        )
      }
    </>
  );
}