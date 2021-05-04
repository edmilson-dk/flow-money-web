import { AuthForm } from "src/components/AuthForm";
import { AuthButton } from "src/components/AuthForm/AuthButton";
import { AuthInput } from "src/components/AuthForm/AuthInput";
import { TitleSecondary } from "src/styles/components/titles";
import { UserFormAuthHoc } from "./_HOC";

function Login() {
  return (
    <main>
      <TitleSecondary>Bem vindo de volta!</TitleSecondary>
      <AuthForm onSubmit={() => console.log("form")}>
        <AuthInput 
          type="email"
          onChange={(e) => console.log(e.target)}
          label="Email"
          name="email"
        />
        <AuthInput 
          type="password"
          onChange={(e) => console.log(e.target)}
          label="Password"
          name="password"
        />
        <AuthButton 
          type="button"
          onClick={() => console.log("clicked")}
          text="Entrar"
        />
      </AuthForm>
    </main>
  );
}

export default UserFormAuthHoc(Login);