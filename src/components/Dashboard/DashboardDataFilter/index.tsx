import { FiSettings } from "react-icons/fi";

import { DashboardDataFilterWrapper } from "src/styles/components/Dashboard/DashboardDataFilter";

export function DashboardDataFilter() {
  return (
    <DashboardDataFilterWrapper>
      <button type="button">
        <strong>
          Filtro
        </strong>
        <span>
          <FiSettings size="100%"/>
        </span>
      </button>
    </DashboardDataFilterWrapper>
  )
}