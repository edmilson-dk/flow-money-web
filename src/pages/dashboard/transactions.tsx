import { DashboardNavBar } from "src/components/Dashboard/DashboardNavBar";
import { PrivateRouter } from "src/router";

function DashboardTransactions({ auth }) {
  return (
    <DashboardNavBar>
      <h1>Transactions page</h1>
    </DashboardNavBar>
  )
}

export default PrivateRouter(DashboardTransactions);