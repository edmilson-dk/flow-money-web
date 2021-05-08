import { ReactChildren, ReactNode } from "react";

import { DashboardNavBarNavigatorWrapper } from "src/styles/components/Dashboard/DashboardNavBarNavigator";
import { NavigatorButton } from "./NavigatorButton";

type DashboardNavBarNavigatorProps = {
  children: ReactNode;
};

export function DashboardNavBarNavigator({ children }: DashboardNavBarNavigatorProps) {
  return (
    <DashboardNavBarNavigatorWrapper>
      { children }
    </DashboardNavBarNavigatorWrapper>
  )
}