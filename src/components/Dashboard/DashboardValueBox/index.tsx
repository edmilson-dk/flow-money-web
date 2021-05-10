import { DashboardValueBoxWrapper } from "src/styles/components/Dashboard/DashboardValueBox";
import { DashboardValueBoxProps } from "./types";

export function DashboardValueBox({ title, icon, value, bg }: DashboardValueBoxProps) {
  return (
    <DashboardValueBoxWrapper bg={bg}>
      <header>
        <h3>{ title }</h3>
        <span>{ icon }</span>
      </header>
      <h2>
        { value.toLocaleString('pt-br', 
          { style: "currency", currency: "BRL" })
        }
      </h2>
    </DashboardValueBoxWrapper>
  )
}