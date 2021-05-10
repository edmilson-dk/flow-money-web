import { Dispatch, SetStateAction } from "react";

export type DashboardModalSuccessOrErrorProps = {
  title: string;
  message?: string;
  isSuccess: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}