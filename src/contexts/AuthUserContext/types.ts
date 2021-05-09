import { ReactNode } from "react";

export type SignInDataType = {
  email: string;
  password: string;
}

export type SignUpDataType = {
  name: string;
  email: string;
  password: string;
}

export type AuthUserContextProps = {
  signIn: (data: SignInDataType) => Promise<boolean>;
  signUp: (data: SignUpDataType) => Promise<boolean>;
};

export type AuthUserContextProviderProps = {
  children: ReactNode;
}