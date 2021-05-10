import { ChangeEvent } from "react";

export type AuthInputProps = {
  type: string;
  name: string;
  onChange?: (e: ChangeEvent<any>) => void;
  label: string;
};
