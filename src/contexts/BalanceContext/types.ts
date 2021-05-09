import { ReactNode } from "react"

export type BalanceContextProps = {
  changeTransaction: boolean;
  setChangeTransactionState: (state: boolean) => void;
}

export type BalanceContextProviderProps = {
  children: ReactNode;
}