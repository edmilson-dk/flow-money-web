import { useRouter } from "next/router";
import { ReactNode } from "react";
import { FiHome, FiPlus, FiSettings } from "react-icons/fi";

import { 
  DashboardNavBarContent, 
  DashboardNavBarMenu, 
  DashboardNavBarWrapper
} from "src/styles/components/Dashboard/DashboardNavBar";
import { DashboardNavBarNavigator } from "../DashboardNavBarNavigator";

type DashboardNavBarProps = {
  children: ReactNode;
};

export function DashboardNavBar({ children }: DashboardNavBarProps) {
  const navigator = [
    {
      router: "/dashboard",
      icon: <FiHome size="100%"/>,
      text: "Home"
    },
    {
      router: "/dashboard/create",
      icon: <FiPlus size="100%"/>,
      text: "Adicionar"
    },
  ];

  return (
    <DashboardNavBarWrapper>
      <DashboardNavBarMenu>
        <DashboardNavBarNavigator data={navigator}/>
      </DashboardNavBarMenu>
      <DashboardNavBarContent>
        { children }
      </DashboardNavBarContent>
    </DashboardNavBarWrapper>
  );
}