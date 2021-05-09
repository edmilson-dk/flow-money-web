import { useContext } from "react";
import { FiArrowDownCircle, FiArrowUpCircle, FiCreditCard } from "react-icons/fi";
import { ThemeContext } from "styled-components";

import { DashboardNavBar } from "src/components/Dashboard/DashboardNavBar";
import { DashboardTransactionsTable } from "src/components/Dashboard/DashboardTransactionsTable";
import { TransactionProps } from "src/components/Dashboard/DashboardTransactionsTable/DashboardTransactionTableRow/types";
import { DashboardValueBox } from "src/components/Dashboard/DashboardValueBox";
import { useFetch } from "src/hooks/useFetch";
import { PrivateRouter } from "src/router";
import { DashboardHeader, DashboardContent } from "src/styles/pages/Dashboard/home";
import { DashboardContainer } from "src/styles/components/Dashboard/DashboardContainer";
import { TitlePrimary } from "src/styles/components/Dashboard/DashboardTitle";

type BalanceType = {
  left: number;
  joined: number;
  total: number;
}

function DashBoard({ auth }) {
  const { colors } = useContext(ThemeContext);
  const headers = { authorization: auth.authorizationString };

  const { data: balance } = useFetch<BalanceType>({ url: "/session/balance", headers });
  const { data: transactions } = useFetch<TransactionProps[]>({ url: "/session/transactions", headers });
  
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