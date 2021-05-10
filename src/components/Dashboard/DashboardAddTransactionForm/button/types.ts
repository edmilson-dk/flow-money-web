export type TransactionButtonProps = {
  onClick: () => void;
  type: "button" | "submit";
  disabled?: boolean;
  text: string;
};