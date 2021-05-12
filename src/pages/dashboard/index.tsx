import { useContext, useEffect, useState } from "react";
import { FiArrowDownCircle, FiArrowUpCircle, FiCreditCard } from "react-icons/fi";
import { ThemeContext } from "styled-components";

import { DashboardNavBar } from "src/components/Dashboard/DashboardNavBar";
import { DashboardTransactionsTable } from "src/components/Dashboard/DashboardTransactionsTable";
import { DashboardValueBox } from "src/components/Dashboard/DashboardValueBox";
import { useFetch } from "src/hooks/useFetch";
import { PrivateRouter } from "src/router";
import { DashboardHeader, DashboardContent } from "src/styles/pages/Dashboard/home";
import { DashboardContainer } from "src/styles/components/Dashboard/DashboardContainer";
import { TitlePrimary } from "src/styles/components/Dashboard/DashboardTitle";
import { BalanceContext } from "src/contexts/BalanceContext";
import { api } from "src/services/fetchApi";
import { BalanceType, TransactionsType } from "./types";

function DashBoard({ auth }) {
  const { colors } = useContext(ThemeContext);
  const [ balance, setBalance ] = useState(null);
  const { changeTransaction, setChangeTransactionState } = useContext(BalanceContext);

  const headers = { authorization: auth.authorizationString };

  const { data } = useFetch<BalanceType>({ url: "/session/balance", headers });
  const { data: t } = useFetch<TransactionsType>({ url: "/session/transactions", headers });
  const { data: transactions, count } = t;

  useEffect(() => { setBalance(data) }, []);
  
  useEffect(() => {
    (async () => {
      const response = await api.get("/session/balance", { headers });
      setBalance(response.data);
      setChangeTransactionState(false);
    })();
  }, [ changeTransaction ]);
  
  return (
    <DashboardNavBar>
      <DashboardHeader>
        <DashboardContainer>
          <DashboardValueBox
            title="Entradas"
            icon={<FiArrowUpCircle size="100%"/>}
            value={balance?.joined ?? 0}
            bg={colors["orange-300"]}
          />
          <DashboardValueBox
            title="Saídas"
            icon={<FiArrowDownCircle size="100%"/>}
            value={balance?.left ?? 0}
            bg={colors["red-100"]}
          />
          <DashboardValueBox
            title="Total"
            icon={<FiCreditCard size="100%"/>}
            value={balance?.total ?? 0}
            bg={colors["green-300"]}
          />
        </DashboardContainer>
      </DashboardHeader>
      <DashboardContent>
        <DashboardContainer>
          <TitlePrimary>Transações</TitlePrimary>
          <DashboardTransactionsTable data={transactions}/>
        </DashboardContainer>
      </DashboardContent>
    </DashboardNavBar>
  )
}

export default PrivateRouter(DashBoard);