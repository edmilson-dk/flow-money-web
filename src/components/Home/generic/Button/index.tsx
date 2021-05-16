import Link from "next/link";

import { ButtonWrapper } from "src/styles/components/Home/generic/Button";
import { ButtonProps } from "./types";

export function Button({ isRouterButton, routerButton, text, bg, upper }: ButtonProps) {
  return (
    <>
      {
        isRouterButton ? (
          <Link href={routerButton}>
            <ButtonWrapper bg={bg} upper={upper}>
              { text }
            </ButtonWrapper>
          </Link>
        ) : (
          <ButtonWrapper bg={bg} upper={upper}>
            { text }
          </ButtonWrapper>
        )
      }
    </>
  );
}