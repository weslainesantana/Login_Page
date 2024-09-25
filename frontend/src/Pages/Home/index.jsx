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

export const Home = () => {
  return (
    <ContainerHome>
      <ContainerInputs>
        <ContentInputs>
          <Title>Bem vindo</Title>
          <SubTitle>Login</SubTitle>
          <Labels>
            <TitleLabel>E-mail</TitleLabel>
            <Inputs type="email" placeholder="fulano@gmail.com" />
          </Labels>
          <Labels>
            <TitleLabel>Senha</TitleLabel>
            <Inputs type="password" placeholder="senha" />
            <Forgot href="#">Esqueceu sua senha?</Forgot>
          </Labels>
          <ButtonLogin>Entrar</ButtonLogin>
        </ContentInputs>
      </ContainerInputs>
    </ContainerHome>
  );
};
