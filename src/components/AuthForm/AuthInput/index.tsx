import { ChangeEvent, MutableRefObject } from "react";
import { AuthInputWrappper } from "src/styles/components/AuthForm/AuthInput";

type AuthInputProps = {
  type: string;
  name: string;
  onChange?: (e: ChangeEvent<any>) => void;
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