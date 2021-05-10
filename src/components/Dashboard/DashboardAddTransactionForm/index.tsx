import { FormEvent, ReactNode } from "react";

import { TransactionFormWrapper } from "src/styles/components/Dashboard/DashboardAddTransactionForm";

type TransactionFormProps = {
  children: ReactNode;
  onSubmit: (e: FormEvent) => void;
};

export function TransactionForm({ children, onSubmit }: TransactionFormProps) {
  return (
    <TransactionFormWrapper onSubmit={onSubmit}>
      { children }
    </TransactionFormWrapper>
  );
}