import { useContext, useState } from "react";

import { AuthForm, AuthSignInOrSignUp } from "src/components/AuthForm/index";
import { AuthButton } from "src/components/AuthForm/AuthButton";
import { AuthInput } from "src/components/AuthForm/AuthInput";
import { AuthUserContext } from "src/contexts/AuthUserContext";
import { UserFormAuthHoc } from "src/hoc-components/UserFormAuthHoc";
import { TitleSecondary } from "src/styles/components/titles";

function Login() {
  const { signIn } = useContext(AuthUserContext);

  const [ email, setEmail ] = useState(null);
  const [ password, setPassword ] = useState(null);

  async function handlerSubmit(e) {
    e.preventDefault();

    const data = {
      email,
      password,
    };

    await signIn(data);
  } 

  return (
    <main>
      <TitleSecondary>Bem vindo de volta!</TitleSecondary>
      <AuthForm onSubmit={handlerSubmit}>
        <AuthInput 
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          label="Email"
          name="email"
        />
        <AuthInput 
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          label="Password"
          name="password"
        />
        <AuthSignInOrSignUp 
          message="Não possui conta? clique aqui."
          router="/user/register"
        />
        <AuthButton 
          type="submit"
          onClick={() => console.log("clicked")}
          text="Entrar"
        />
      </AuthForm>
    </main>
  );
}

export default UserFormAuthHoc(Login);