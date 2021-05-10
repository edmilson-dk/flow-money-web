import { FiChevronDown, FiChevronUp } from "react-icons/fi";

import { TransactionSwitchBooleanWrapper } from "src/styles/components/Dashboard/DashboardAddTransactionForm/switchBoolean";

import { TransactionSwitchBooleanProps } from "./types";

export function TransactionSwitchBoolean({ setState, label }: TransactionSwitchBooleanProps) {
  return (
    <TransactionSwitchBooleanWrapper>
      <label>{ label }</label>
      <div>
        <button type="button" onClick={() => setState(false)}>
          <span>
            <FiChevronUp size="100%"/>
          </span>
        </button>
        <button type="button" onClick={() => setState(true)}>
          <span>
            <FiChevronDown size="100%"/>
          </span>
        </button>
      </div>
    </TransactionSwitchBooleanWrapper>
  );
}