import React from 'react'
import { BuscarInputContainer, Container, Input, Menu, MenuRight, Row, UserPicture, Wrapper } from './styles'
import Button  from '../Button'
import logo from '../../assets/logo-dio.png'
import { useNavigate } from 'react-router-dom'

function Header({autenticado}) {
  const navigate = useNavigate();

  return (
    <Wrapper>
      <Container>
        <Row>
          <img src={logo} alt="Logo DIO" />
          {autenticado ? (
            <>
              <BuscarInputContainer>
                <Input placeholder="Buscar..."/>
              </BuscarInputContainer>
              <Menu>Live Code</Menu>
              <Menu>Global</Menu>
            </>
        ) : null}
        </Row>
        <Row>
        {autenticado ? (
          <UserPicture src="https://avatars.githubusercontent.com/u/57533948?v=4"></UserPicture>
        ):(  
          <>
            <MenuRight href="#"></MenuRight>
            <Button title="Entrar" onClick={() => {
              navigate('/login');
            }}/>
            <Button title="Cadastrar" onClick={() => {
              navigate('/register');
            }}/>
          </>
        )}
        </Row>
      </Container>
    </Wrapper>
  )
}

export default Header