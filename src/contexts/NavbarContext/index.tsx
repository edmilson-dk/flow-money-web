import { createContext, Dispatch, ReactNode, SetStateAction, useContext, useState } from "react";

type NavBarContextProps = {
  toggleMenu: () => void;
  isOpenMenuState: boolean;
}

type NavBarContextProviderProps = {
  children: ReactNode;
}

const NavBarContext = createContext({} as NavBarContextProps);

export function NavBarContextProvider({ children }: NavBarContextProviderProps) {
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  function toggleMenu() {
    setIsOpenMenu(!isOpenMenu);
  }

  return (
    <NavBarContext.Provider value={{
      isOpenMenuState: isOpenMenu,
      toggleMenu
    }}>
      { children }
    </NavBarContext.Provider>
  )
}

export function useNavBarContext() {
  const context = useContext(NavBarContext);
  return context;
}