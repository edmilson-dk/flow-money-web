import { ReactNode } from "react";
import { FiBarChart2, FiHome, FiList, FiLogOut, FiMenu, FiPlus } from "react-icons/fi";

import { useNavBarContext } from "src/contexts/NavbarContext";
import { AuthToken } from "src/services/authToken";
import { 
  DashboardNavBarContent, 
  DashboardNavBarMenu, 
  DashboardNavBarWrapper
} from "src/styles/components/Dashboard/DashboardNavBar";
import { DashboardNavBarNavigator } from "../DashboardNavBarNavigator";
import { NavigatorButton } from "../DashboardNavBarNavigator/NavigatorButton";

type DashboardNavBarProps = {
  children: ReactNode;
};

export function DashboardNavBar({ children }: DashboardNavBarProps) {
  const { isOpenMenuState, toggleMenu } = useNavBarContext();

  return (
    <DashboardNavBarWrapper>
      <button 
        id="control-menu-btn"
        type="button" 
        onClick={toggleMenu}>
        <span>
          <FiMenu />
        </span>
      </button>
      <DashboardNavBarMenu displayResponsive={isOpenMenuState}>
        <DashboardNavBarNavigator>
          <NavigatorButton 
            router="/dashboard"
            icon={<FiHome size="100%"/>}
            text="Home"
          />
          <NavigatorButton 
            router="/dashboard/transactions"
            icon={<FiList size="100%"/>}
            text="Transações"
          />
          <NavigatorButton 
            router="/dashboard/create"
            icon={<FiPlus size="100%"/>}
            text="Adicionar"
          />
          <NavigatorButton 
            router="/dashboard/charts"
            icon={<FiBarChart2 size="100%"/>}
            text="Gráficos"
          />
          <button id="logout" type="button" onClick={AuthToken.logout}>
            <span>
              <FiLogOut size="100%"/>
            </span>
            <strong>Sair</strong>
          </button>
        </DashboardNavBarNavigator>
      </DashboardNavBarMenu>
      <DashboardNavBarContent>
        { children }
      </DashboardNavBarContent>
    </DashboardNavBarWrapper>
  );
}