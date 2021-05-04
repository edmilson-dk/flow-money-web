import { ChangeEvent } from "react";
import { AuthInputWrappper } from "src/styles/components/AuthForm/AuthInput";

type AuthInputProps = {
  type: string;
  name: string;
  onChange?: (e: ChangeEvent) => void;
  label: string;
};

export function AuthInput({ type, onChange, label, name }: AuthInputProps) {
  return (
    <AuthInputWrappper>
      <label>{ label }</label>
      <input type={type} onChange={onChange} name={name}/>
    </AuthInputWrappper>
  );
}