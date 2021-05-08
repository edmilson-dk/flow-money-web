import { ReactNode } from "react";

import { DashboardNavBarNavigatorWrapper } from "src/styles/components/Dashboard/DashboardNavBarNavigator";
import { NavigatorButton } from "./NavigatorButton";

type NavigatorProps = {
  router: string;
  icon: ReactNode;
  text: string;
}

type DashboardNavBarNavigatorProps = {
  data: Array<NavigatorProps>;
};

export function DashboardNavBarNavigator({ data }: DashboardNavBarNavigatorProps) {
  return (
    <DashboardNavBarNavigatorWrapper>
      {
        data.map((navigator, i) => (
          <NavigatorButton 
            text={navigator.text}
            marginTop={`${70 * i}px`}
            key={navigator.router} 
            router={navigator.router} 
            icon={navigator.icon}
          />
        ))
      }
    </DashboardNavBarNavigatorWrapper>
  )
}