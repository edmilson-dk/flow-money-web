import { useContext, useState } from "react";

import { AuthForm, AuthSignInOrSignUp } from "src/components/AuthForm/index";
import { AuthButton } from "src/components/AuthForm/AuthButton";
import { AuthInput } from "src/components/AuthForm/AuthInput";
import { AuthUserContext } from "src/contexts/AuthUserContext";
import { UserFormAuthHoc } from "src/hoc-components/UserFormAuthHoc";
import { TitleSecondary } from "src/styles/components/titles";

function Register() {
  const { signUp } = useContext(AuthUserContext);

  const [ name, setName ] = useState(null);
  const [ email, setEmail ] = useState(null);
  const [ password, setPassword ] = useState(null);

  async function handlerSubmit(e) {
    e.preventDefault();

    const data = {
      name,
      email,
      password,
    };
  
    await signUp(data);
  } 

  return (
    <main>
      <TitleSecondary>Seja bem vindo! </TitleSecondary>
      <AuthForm onSubmit={handlerSubmit}>
        <AuthInput 
          type="name"
          onChange={(e) => setName(e.target.value)}
          label="Nome"
          name="name"
        />
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
          message="Já possui conta? clique aqui."
          router="/user/login"
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

export default UserFormAuthHoc(Register);