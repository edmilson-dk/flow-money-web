import Link from "next/link";

import { DashboardNavBar } from "src/components/Dashboard/DashboardNavBar";
import { PrivateRouter } from "src/router";

function DashBoard({ auth }) {
  return (
    <DashboardNavBar>
      <h1>Dashboard home</h1>
      <Link href="/dashboard/create">
        <p>Create</p>
      </Link>
    </DashboardNavBar>
  )
}

export default PrivateRouter(DashBoard);
