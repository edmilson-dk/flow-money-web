import { TransactionProps } from "src/components/Dashboard/DashboardTransactionsTable/DashboardTransactionTableRow/types"

export type BalanceType = {
  left: number;
  joined: number;
  total: number;
}

export type TransactionsType = {
  data: TransactionProps[],
  count: number;
}