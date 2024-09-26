import { useState } from "react";
import { privateAPi } from "../../services/privateApi";
import {
  ContainerHome,
  ContainerInputs,
  ContentInputs,
  Title,
  SubTitle,
  Inputs,
  ButtonLogin,
  Labels,
  Forgot,
  TitleLabel,
} from "./style";
import { useNavigate } from "react-router-dom";

export const Home = () => {
  // const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    /*TRY é um tratamento de erro, faça uma coisa se não faça outra, ele captura casos de erro, e cai no CATCH*/
    try {
      const response = await privateAPi.post("/login", { email, senha });
      const data = response.data;

      if (response.status == 200) {
        // navigate("/test");
        console.log("Funcionou");
      } else {
        console.log("Erro de login", data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <ContainerHome>
      <ContainerInputs>
        <ContentInputs onSubmit={handleSubmit}>
          <Title>Bem vindo</Title>
          <SubTitle>Login</SubTitle>
          <Labels>
            <TitleLabel>E-mail</TitleLabel>
            <Inputs
              type="email"
              placeholder="fulano@gmail.com"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </Labels>
          <Labels>
            <TitleLabel>Senha</TitleLabel>
            <Inputs
              type="password"
              placeholder="senha"
              onChange={(e) => setSenha(e.target.value)}
              required
            />
            <Forgot href="#">Esqueceu sua senha?</Forgot>
          </Labels>
          <ButtonLogin type="submit">Entrar</ButtonLogin>
        </ContentInputs>
      </ContainerInputs>
    </ContainerHome>
  );
};
