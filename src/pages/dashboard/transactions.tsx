import { useCallback, useEffect, useState } from "react";

import { DashboardNavBar } from "src/components/Dashboard/DashboardNavBar";
import { DashboardTransactionsTable } from "src/components/Dashboard/DashboardTransactionsTable";
import { useFetch } from "src/hooks/useFetch";
import { PrivateRouter } from "src/router";
import { DashboardContent } from "src/styles/pages/dashboard/home";
import { DashboardContainer } from "src/styles/components/Dashboard/DashboardContainer";
import { TitlePrimary } from "src/styles/components/Dashboard/DashboardTitle";
import { api } from "src/services/fetchApi";
import { TransactionsType } from "./types";
import { DashboardDataPaginate } from "src/components/Dashboard/DashboardDataPaginate";

function DashBoardTransactions({ auth }) {
  const [ transactions, setTransactions ] = useState([]);
  const [ actualDataPage, setActualDataPage ] = useState(1);
  const [ count, setCount ] = useState(10);

  const headers = { authorization: auth.authorizationString };

  const { data: t } = useFetch<TransactionsType>({ url: "/session/transactions", headers });

  async function newDataFetch(page: number){
    const { data: t } = await api.get(
      "/session/transactions", 
      { headers, params: { page } });

    setTransactions(t.data);
  }

  const handlerNextDataClick = useCallback(async () => {
    const page = actualDataPage + 1;
    setActualDataPage(page);
    await newDataFetch(page);
  }, [actualDataPage]);

  const handlerPrevDataClick = useCallback(async () => {
    const page = actualDataPage - 1;
    setActualDataPage(page);
    await newDataFetch(page);
  }, [actualDataPage]);

  useEffect(() => {
    setTransactions(t?.data);
    setCount(t?.count);
  }, [t]);
  
  return (
    <DashboardNavBar>  
      <DashboardContent>
        <DashboardContainer>
          <TitlePrimary>Transações</TitlePrimary>
          <DashboardTransactionsTable data={transactions}/>
          <DashboardDataPaginate 
            nextCbFetch={handlerNextDataClick}
            prevCbFetch={handlerPrevDataClick}
            prevDisabled={actualDataPage === 1}
            nextDisabled={actualDataPage === Math.ceil(count / 10)}
          />
        </DashboardContainer>
      </DashboardContent>
    </DashboardNavBar>
  )
}

export default PrivateRouter(DashBoardTransactions);