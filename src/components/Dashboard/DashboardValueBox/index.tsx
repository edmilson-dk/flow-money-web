import { ReactNode } from "react";

import { DashboardValueBoxWrapper } from "src/styles/components/Dashboard/DashboardValueBox";

type DashboardValueBoxProps = {
  title: string;
  icon: ReactNode;
  value: number;
  bg: string;
};

export function DashboardValueBox({ title, icon, value, bg }: DashboardValueBoxProps) {
  return (
    <DashboardValueBoxWrapper bg={bg}>
      <header>
        <h3>{ title }</h3>
        <span>{ icon }</span>
      </header>
      <h2>{ value }</h2>
    </DashboardValueBoxWrapper>
  )
}