import Link from "next/link";

import { AuthFormWrapper } from "src/styles/components/AuthForm";
import { AuthFormProps, AuthSignInOrSignUpProps } from "./types";

export function AuthForm({ children, onSubmit }: AuthFormProps) {
  return (
    <AuthFormWrapper onSubmit={onSubmit}>
      { children }
    </AuthFormWrapper>
  );
}

export function AuthSignInOrSignUp({ message, router }: AuthSignInOrSignUpProps) {
  return (
    <Link href={router}>
      <a id="authSignInOrSignUp">{ message }</a>
    </Link>
  )
}