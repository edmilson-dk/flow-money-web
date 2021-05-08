import { ReactNode } from "react";
import { FiHome, FiPlus } from "react-icons/fi";

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
        </DashboardNavBarNavigator>
      </DashboardNavBarMenu>
      <DashboardNavBarContent>
        { children }
      </DashboardNavBarContent>
    </DashboardNavBarWrapper>
  );
}