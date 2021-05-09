import { useRef } from "react";
import {  FiTrash } from "react-icons/fi";

import { AuthToken } from "src/services/authToken";
import { api } from "src/services/fetchApi";

import { DashboardTransactionTableRowWrapper } from "src/styles/components/Dashboard/DashboardTransactionsTable/DashboardTransactionTableRow";
import { formatDate } from "src/utils/formatDate";
import { TransactionProps } from "./types";

export function DashboardTransactionTableRow({ title, category, value, isDecrement, id, createdAt }: TransactionProps) {
 const trRef = useRef<HTMLTableRowElement>(null);
 
  async function deleteTransaction() {
    await api.delete(`/session/drop/transaction/${id}`, {
      headers: { authorization: AuthToken.getStoragedToken(true)},
    });

    trRef.current.style.display = "none";
  }
  
  return (
    <DashboardTransactionTableRowWrapper ref={trRef}>
      <td>{title}</td>
      <td>{ category }</td>
      <td id={isDecrement ? "isDecrement" : "notIsDecrement"}>{ value }</td>
      <td>{ formatDate(createdAt) }</td>
      <td>
        <button type="button" onClick={deleteTransaction}>
          <FiTrash size="100%"/>
        </button>
      </td>
    </DashboardTransactionTableRowWrapper>
  );
}