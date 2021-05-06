import { ReactNode } from "react";

import { 
  DashboardNavBarContent, 
  DashboardNavBarMenu, 
  DashboardNavBarWrapper
} from "src/styles/components/Dashboard/DashboardNavBar";

type DashboardNavBarProps = {
  children: ReactNode;
};

export function DashboardNavBar({ children }: DashboardNavBarProps) {
  return (
    <DashboardNavBarWrapper>
      <DashboardNavBarMenu>
        <h3>Flow Money</h3>
      </DashboardNavBarMenu>
      <DashboardNavBarContent>
        { children }
      </DashboardNavBarContent>
    </DashboardNavBarWrapper>
  );
}