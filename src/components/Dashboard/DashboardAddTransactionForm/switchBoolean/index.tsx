import { FiChevronDown, FiChevronUp } from "react-icons/fi";

import { TransactionSwitchBooleanWrapper } from "src/styles/components/Dashboard/DashboardAddTransactionForm/switchBoolean";
import { TransactionSwitchBooleanProps } from "./types";

export function TransactionSwitchBoolean({ setState }: TransactionSwitchBooleanProps) {
  return (
    <TransactionSwitchBooleanWrapper>
      <div>
        <button type="button" onClick={() => setState(false)}>
          <span>
            <FiChevronUp size="100%"/>
          </span>
          Entrada
        </button>
        <button type="button" onClick={() => setState(true)}>
          <span>
            <FiChevronDown size="100%"/>
          </span>
          Saída
        </button>
      </div>
    </TransactionSwitchBooleanWrapper>
  );
}