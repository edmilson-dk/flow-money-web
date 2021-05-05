import { useContext, useState } from "react";
import { toast } from "react-toastify";

import { AuthForm } from "src/components/AuthForm";
import { AuthButton } from "src/components/AuthForm/AuthButton";
import { AuthInput } from "src/components/AuthForm/AuthInput";
import { AuthUserContext } from "src/contexts/AuthUserContext";
import { TitleSecondary } from "src/styles/components/titles";
import UserFormAuthHoc from "./_HOC";

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