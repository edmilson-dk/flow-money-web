
import { useContext } from "react";
import { FiCheckCircle, FiX, FiXCircle } from "react-icons/fi";
import { DashboardModalSuccessOrErrorContent, DashboardModalSuccessOrErrorWrapper } from "src/styles/components/Dashboard/DashboardModalSuccessOrError";
import { ThemeContext, useTheme } from "styled-components";
import { DashboardModalSuccessOrErrorProps } from "./types";

export function DashboardModalSuccessOrError({ title, message, isSuccess, setIsOpen }: DashboardModalSuccessOrErrorProps) {
  const { colors } = useContext(ThemeContext);

  return (
    <DashboardModalSuccessOrErrorWrapper>
      <DashboardModalSuccessOrErrorContent isSuccess={isSuccess}>
        <button type="button" onClick={() => setIsOpen(false)}>
          <span><FiX size="100%"/></span>
        </button>

        <span>
          {
            isSuccess 
            ? ( <FiCheckCircle size="100%" color={colors["green-300"]}/> )
            : ( <FiXCircle size="100%" color={colors["red-200"]}/> )
          }
        </span>

        <h3>{ title }</h3>
        <p>{ message } </p>
      </DashboardModalSuccessOrErrorContent>
    </DashboardModalSuccessOrErrorWrapper>
  );
 }