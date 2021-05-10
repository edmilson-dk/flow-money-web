import { DashboardTransactionsTableWrapper } from "src/styles/components/Dashboard/DashboardTransactionsTable";
import { DashboardTransactionTableRow } from "./DashboardTransactionTableRow";
import { TransactionProps } from "./DashboardTransactionTableRow/types";

type DashboardTransactionsTableProps = {
  data: Array<TransactionProps>;
}

export function DashboardTransactionsTable({ data }: DashboardTransactionsTableProps) {
  return (
    <DashboardTransactionsTableWrapper>
      <table cellSpacing={0}>
        <thead>
          <tr>
            <th>Titúlo</th>
            <th>Catégoria</th>
            <th>Valor</th>
            <th>Data</th>
          </tr>
        </thead>
        
        <tbody>
          {
            data?.length > 0 && data.map(transaction => (
              <DashboardTransactionTableRow 
                title={transaction.title}
                category={transaction.category}
                value={Number(transaction.value).toLocaleString("pt-br", { style: "currency", currency: "BRL"})}
                id={transaction.id}
                isDecrement={transaction.isDecrement}
                createdAt={transaction.createdAt}
                key={transaction.id}
              />
            ))
          }
        </tbody>
      </table>
    </DashboardTransactionsTableWrapper>
  );
}