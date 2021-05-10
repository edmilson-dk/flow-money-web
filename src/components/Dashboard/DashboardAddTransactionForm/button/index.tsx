import { TransactionButtonWrapper } from "src/styles/components/Dashboard/DashboardAddTransactionForm/button";
import { TransactionButtonProps } from "./types";

export function TransactionButton({ type, disabled, text }: TransactionButtonProps) {
  return (
    <TransactionButtonWrapper type={type} disabled={disabled} >
      { text }
    </TransactionButtonWrapper>
  );
}