import { FiSettings } from "react-icons/fi";

export function DashboardDataFilter() {
  return (
    <DashboardDataFilterWrapper>
      <button type="button">
        <strong>
          Filtro
        </strong>
        <span>
          <FiSettings />
        </span>
      </button>
    </DashboardDataFilterWrapper>
  )
}