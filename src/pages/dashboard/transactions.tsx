import { useCallback, useEffect, useRef, useState } from "react";

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
import { FiSearch } from "react-icons/fi";
import { DashboardTransactionsHeader } from "src/styles/pages/dashboard/transactions";
import { DashboardDataFilter } from "src/components/Dashboard/DashboardDataFilter";

function DashBoardTransactions({ auth }) {
  const [ transactions, setTransactions ] = useState([]);
  const [ actualDataPage, setActualDataPage ] = useState(1);
  const [ count, setCount ] = useState(10);
  const searchInputRef = useRef<HTMLInputElement>(null);

  const headers = { authorization: auth.authorizationString };

  const { data: t } = useFetch<TransactionsType>({ url: "/session/transactions", headers });

  async function newDataFetch(withPage: boolean, page: number, title_category = ""){
    const query = withPage ? { page } : { title_category };

    const { data: t } = await api.get(
      "/session/transactions", 
      { headers, params: { ...query } });

    setTransactions(t.data);
    setCount(t?.count);
  }

  async function handlerSearchInput() {
    await newDataFetch(false, 1, searchInputRef.current?.value);
  }

  const handlerNextDataClick = useCallback(async () => {
    const page = actualDataPage + 1;
    setActualDataPage(page);
    await newDataFetch(true, page);
  }, [actualDataPage]);

  const handlerPrevDataClick = useCallback(async () => {
    const page = actualDataPage - 1;
    setActualDataPage(page);
    await newDataFetch(true, page);
  }, [actualDataPage]);

  useEffect(() => {
    setTransactions(t?.data);
    setCount(t?.count);
  }, [t]);
  
  return (
    <DashboardNavBar>  
      <DashboardContent>
        <DashboardContainer>
          <DashboardTransactionsHeader>
            <TitlePrimary>Transações</TitlePrimary>
            
            <div id="input-search">
              <input ref={searchInputRef} type="text" name="search" placeholder="Busque por titúlo ou catégoria"/>
              <button type="button" onClick={handlerSearchInput}>
                <span>
                  <FiSearch size="100%"/>
                </span>
              </button>
            </div>
          </DashboardTransactionsHeader>
          <DashboardDataFilter />

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