import { TransactionInputWrappper } from "src/styles/components/Dashboard/DashboardAddTransactionForm/input";
import { TransactionInputProps } from "./types";

export function TransactionInput({ type, onChange, label, name }: TransactionInputProps) {
  return (
    <TransactionInputWrappper>
      <label>{ label }</label>
      <input type={type} onChange={onChange} name={name}/>
    </TransactionInputWrappper>
  );
}