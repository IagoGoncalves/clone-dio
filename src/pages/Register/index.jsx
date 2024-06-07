import { useNavigate } from "react-router-dom";
import { MdEmail, MdLock } from "react-icons/md";
import { FaUserLarge } from "react-icons/fa6";
import { useForm } from 'react-hook-form';

import { Column, Container, SubTitleLogin, Title, TitleLogin, Wrapper } from "./styles";
import { api } from '../../services/api';

import Header from "../../components/Header";
import Input from "../../components/Input";
import Button from "../../components/Button";

function Register() {
  const navigate = useNavigate();

  const { register, control, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      completeName: '',
      email: '',
      password: ''
    }
  });

  const onSubmit = async formData => {
    try {
      const response = await api.post('/users', formData);
      console.log('Usuário cadastrado corretamente:', response.data);
      navigate('/login');
    } catch (error) {
    console.log("Erro ao cadastrar");
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
            <TitleLogin>Comece agora grátis</TitleLogin>
            <SubTitleLogin>Crie sua conta e make the change._</SubTitleLogin>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Input 
                name="completeName" 
                errorMessage={errors?.completeName?.message} 
                control={control} 
                placeholder="Nome completo" 
                leftIcon={<FaUserLarge />}
                {...register('completeName', { required: 'Nome completo é obrigatório' })}
              />
              <Input 
                name="email" 
                errorMessage={errors?.email?.message} 
                control={control} 
                placeholder="E-mail" 
                leftIcon={<MdEmail />}
                {...register('email', { required: 'E-mail é obrigatório', pattern: { value: /^\S+@\S+$/i, message: 'E-mail inválido' } })}
              />
              <Input 
                name="password" 
                errorMessage={errors?.password?.message} 
                control={control} 
                placeholder="Senha" 
                type="password" 
                leftIcon={<MdLock />}
                {...register('password', { required: 'Senha é obrigatória', minLength: { value: 6, message: 'Senha deve ter pelo menos 6 caracteres' } })}
              />
              <Button title="Criar minha conta" variant="secondary" type="submit" />
            </form>
          </Wrapper>
        </Column>
      </Container>
    </>
  );
}

export default Register;
