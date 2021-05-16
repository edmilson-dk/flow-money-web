import { ReactNode } from "react";
import { FiBarChart2, FiHome, FiLogOut, FiPlus } from "react-icons/fi";

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
  return (
    <DashboardNavBarWrapper>
      <DashboardNavBarMenu>
        <DashboardNavBarNavigator>
          <NavigatorButton 
            router="/dashboard"
            icon={<FiHome size="100%"/>}
            text="Home"
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