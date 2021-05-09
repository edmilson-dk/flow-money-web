import {  FiTrash } from "react-icons/fi";

import { DashboardTransactionTableRowWrapper } from "src/styles/components/Dashboard/DashboardTransactionsTable/DashboardTransactionTableRow";
import { TransactionProps } from "./types";

export function DashboardTransactionTableRow({ title, category, value, isDecrement, id, createdAt }: TransactionProps) {
  return (
    <DashboardTransactionTableRowWrapper>
      <td>{title}</td>
      <td>{ category }</td>
      <td id={isDecrement ? "isDecrement" : "notIsDecrement"}>{ value }</td>
      <td>{ createdAt }</td>
      <td>
        <button>
          <FiTrash size="100%"/>
        </button>
      </td>
    </DashboardTransactionTableRowWrapper>
  );
}