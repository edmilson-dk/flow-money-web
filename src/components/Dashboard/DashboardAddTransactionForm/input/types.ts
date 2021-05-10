import { ChangeEvent } from "react";

export type TransactionInputProps = {
  type: string;
  name: string;
  onChange?: (e: ChangeEvent<any>) => void;
  label: string;
};
