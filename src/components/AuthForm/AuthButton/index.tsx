import { AuthButtonWrapper } from "src/styles/components/AuthForm/AuthButton";
import { AuthButtonProps } from "./types";

export function AuthButton({ type, disabled, text }: AuthButtonProps) {
  return (
    <AuthButtonWrapper type={type} disabled={disabled} >
      { text }
    </AuthButtonWrapper>
  );
}