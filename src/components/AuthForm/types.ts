import { FormEvent, ReactNode } from "react";

export type AuthFormProps = {
  children: ReactNode;
  onSubmit: (e: FormEvent) => void;
};

export type AuthSignInOrSignUpProps = {
  message: string;
  router: string;
}