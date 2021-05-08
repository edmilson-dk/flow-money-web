import { useContext } from "react";
import { FiArrowDownCircle, FiArrowUpCircle, FiCreditCard } from "react-icons/fi";
import { DashboardNavBar } from "src/components/Dashboard/DashboardNavBar";
import { DashboardValueBox } from "src/components/Dashboard/DashboardValueBox";
import { PrivateRouter } from "src/router";
import { DashBoardHeader } from "src/styles/pages/Dashboard/home";
import { ThemeContext } from "styled-components";

function DashBoard({ auth }) {
  const { colors } = useContext(ThemeContext);

  return (
    <DashboardNavBar>
      <DashBoardHeader>
        <DashboardValueBox
          title="Entradas"
          icon={<FiArrowUpCircle size="100%"/>}
          value={1000}
          bg={colors["orange-300"]}
        />
        <DashboardValueBox
          title="Saídas"
          icon={<FiArrowDownCircle size="100%"/>}
          value={1000}
          bg={colors["red-100"]}
        />
        <DashboardValueBox
          title="Total"
          icon={<FiCreditCard size="100%"/>}
          value={1000}
          bg={colors["green-300"]}
        />
      </DashBoardHeader>
    </DashboardNavBar>
  )
}

export default PrivateRouter(DashBoard);
