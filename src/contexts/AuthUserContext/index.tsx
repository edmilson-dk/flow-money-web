import { createContext, ReactNode, useState } from "react";
import { AuthToken } from "src/services/authToken";
import { api } from "src/services/fetchApi";

type SignInDataType = {
  email: string;
  password: string;
}

type SignUpDataType = {
  name: string;
  email: string;
  password: string;
}

type AuthUserContextProps = {
  signIn: (data: SignInDataType) => Promise<boolean>;
  signUp: (data: SignUpDataType) => Promise<boolean>;
};

type AuthUserContextProviderProps = {
  children: ReactNode;
}

export const AuthUserContext = createContext({} as AuthUserContextProps);

export function AuthUserContextProvider({ children }: AuthUserContextProviderProps) {
  async function signUp(data: SignUpDataType): Promise<boolean> {
    try {
      const response = await api.post("/register", data);

      if (response.status === 201) {
        await AuthToken.storeToken(response.data.token);
        return true;
      }

      return false;
    } catch (e) {
      return false;
    }
  }

  async function signIn(data: SignInDataType): Promise<boolean> {
    try {
      const response = await api.post("/login", data);

      if (response.status === 200) {
        await AuthToken.storeToken(response.data.token);
        return true;
      }

      return false;
    } catch (e) {
      return false;
    }
  }

  return (
    <AuthUserContext.Provider value={{ signIn, signUp }}>
      { children }
    </AuthUserContext.Provider>
  );
}