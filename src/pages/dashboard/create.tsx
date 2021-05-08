import { Container } from "next/app";
import { DashboardNavBar } from "src/components/Dashboard/DashboardNavBar";
import { PrivateRouter } from "src/router";

function DashBoardCreate({ auth }) {
  return (
    <DashboardNavBar>
      <h1>Teste</h1>
    </DashboardNavBar>
  )
}

export default PrivateRouter(DashBoardCreate);
