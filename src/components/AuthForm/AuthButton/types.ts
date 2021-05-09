export type AuthButtonProps = {
  onClick: () => void;
  type: "button" | "submit";
  disabled?: boolean;
  text: string;
};