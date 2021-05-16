import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "styled-components";
import { Pie } from "react-chartjs-2";

import { DashboardNavBar } from "src/components/Dashboard/DashboardNavBar";
import { BalanceContext } from "src/contexts/BalanceContext";
import { useFetch } from "src/hooks/useFetch";
import { PrivateRouter } from "src/router";
import { api } from "src/services/fetchApi";
import { BalanceType } from "./types";
import { DashboardChartsWrapper } from "src/styles/pages/dashboard/charts";
import { DashboardContainer } from "src/styles/components/Dashboard/DashboardContainer";
import { TitleThird } from "src/styles/components/Dashboard/DashboardTitle";

function DashboardCharts({ auth }) {
  const { colors } = useContext(ThemeContext);
  const [ balance, setBalance ] = useState({} as BalanceType);

  const { changeTransaction, setChangeTransactionState } = useContext(BalanceContext);

  const headers = { authorization: auth.authorizationString };

  const { data: balanceData } = useFetch<BalanceType>({ url: "/session/balance", headers });

  useEffect(() => setBalance(balanceData), []);

  useEffect(() => {
    (async () => {
      const response = await api.get("/session/balance", { headers });
      setBalance(response.data);
      setChangeTransactionState(false);
    })();
  }, [ changeTransaction ]);
  
  return (
    <DashboardNavBar>
      <DashboardChartsWrapper>
        <DashboardContainer>
          <div className="dashboardChartsItem">
            <TitleThird align="center">Estastíscas de entrada e saída</TitleThird>
            <Pie data={
              {
                labels: ["Entradas", "Saídas"],
                datasets: [
                  {
                    label: "Saldo",
                    data: [Number(balance?.joined ?? 50), Number(balance?.left) ?? 50],
                    backgroundColor: [
                      colors["green-200"],
                      colors["orange-200"],
                    ],
                    borderWidth: 1,
                  },
                ],
              }
            } type="pie"/>
          </div>
        </DashboardContainer>
      </DashboardChartsWrapper>
    </DashboardNavBar>
  )
};

export default PrivateRouter(DashboardCharts);