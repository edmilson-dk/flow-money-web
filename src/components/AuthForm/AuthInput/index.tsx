import { AuthInputWrappper } from "src/styles/components/AuthForm/AuthInput";
import { AuthInputProps } from "./types";

export function AuthInput({ type, onChange, label, name }: AuthInputProps) {
  return (
    <AuthInputWrappper>
      <label>{ label }</label>
      <input type={type} onChange={onChange} name={name}/>
    </AuthInputWrappper>
  );
}