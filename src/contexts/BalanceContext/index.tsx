import { createContext, useState } from "react";

import { BalanceContextProps, BalanceContextProviderProps } from "./types";

export const BalanceContext = createContext({} as BalanceContextProps);

export function BalanceContextProvider({ children }: BalanceContextProviderProps) {
  const [ changeTransaction, setChangeTransaction ] = useState(false);
  
  function setChangeTransactionState(state: boolean) {
    setChangeTransaction(state);
  }

  return (
    <BalanceContext.Provider value={{ 
      setChangeTransactionState, 
      changeTransaction 
    }}>
      { children }
    </BalanceContext.Provider>
  )
}