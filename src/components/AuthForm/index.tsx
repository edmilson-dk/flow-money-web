import { ReactNode } from "react";
import { AuthFormWrapper } from "src/styles/components/AuthForm";

type AuthFormProps = {
  children: ReactNode;
  onSubmit: () => void;
};

export function AuthForm({ children, onSubmit }: AuthFormProps) {
  return (
    <AuthFormWrapper onSubmit={onSubmit}>
      { children }
    </AuthFormWrapper>
  );
}