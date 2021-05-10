import { Dispatch, SetStateAction } from "react";

export type TransactionSwitchBooleanProps = {
  setState: Dispatch<SetStateAction<boolean>>;
  label: string;
}