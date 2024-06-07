import { MdEmail, MdLock } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import Header from "../../components/Header";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { Column, Container, CriarText, EsqueciText, Row, SubTitleLogin, Title, TitleLogin, Wrapper } from "./styles";
import { api } from '../../services/api';

const schema = yup
  .object({
    email: yup.string().email('Email não é válido').required('Campo obrigatório'),
    password: yup.string().min(3, 'No mínimo 3 caracteres').required('Campo obrigatório'),
  })
  .required();

function Login() {
  const navigate = useNavigate();

  const { control, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
    mode: 'onChange'
  });

  const onSubmit = async formData => {
    try{
      const {data} = await api.get(`users?email=${formData.email}&senha=&{formData.password}`);
      if (data.length === 1) {
        navigate('/feed');
      }else{
        console.log('Email ou senha não encontrado');
      }
    }catch{
      alert('Houve um erro')
    }
  };

  return (
    <>
      <Header />
      <Container>
        <Column>
          <Title>A plataforma para você aprender com experts, dominar as principais tecnologias e entrar mais rápido nas empresas desejadas.</Title>
        </Column>
        <Column>
          <Wrapper>
            <TitleLogin>Faça seu cadastro</TitleLogin>
            <SubTitleLogin>Faça seu login e make the change._</SubTitleLogin>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Input 
                name="email" 
                errorMessage={errors?.email?.message} 
                control={control} 
                placeholder="E-mail" 
                leftIcon={<MdEmail />}
              />
              <Input 
                name="password" 
                errorMessage={errors?.password?.message} 
                control={control} 
                placeholder="Senha" 
                type="password" 
                leftIcon={<MdLock />}
              />
              <Button title="Entrar" variant="secondary" type="submit" />
            </form>
            <Row>
              <EsqueciText>Esqueci minha senha</EsqueciText>
              <CriarText href="#" onClick={navigate('/register')}>Criar Conta</CriarText>
            </Row>
          </Wrapper>
        </Column>
      </Container>
    </>
  )
}

export default Login;
