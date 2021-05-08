import {  ReactNode } from "react";

import { DashboardNavBarNavigatorWrapper } from "src/styles/components/Dashboard/DashboardNavBarNavigator";

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