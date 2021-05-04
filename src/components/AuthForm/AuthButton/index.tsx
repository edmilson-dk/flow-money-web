import { AuthButtonWrapper } from "src/styles/components/AuthForm/AuthButton";

type AuthButtonProps = {
  onClick: () => void;
  type: string;
  disabled?: boolean;
  text: string;
};

export function AuthButton({ type, disabled, text }: AuthButtonProps) {
  return (
    <AuthButtonWrapper type={type} disabled={disabled} >
      { text }
    </AuthButtonWrapper>
  );
}