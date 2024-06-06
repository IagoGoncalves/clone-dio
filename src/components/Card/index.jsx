import React from 'react';
import { CardContainer, Content, HasInfo, ImageBackground, PostInfo, UserInfo, UserPicture } from './styles';
import {FiThumbsUp}  from 'react-icons/fi';

function Card() {
  return (
    <CardContainer>
      <ImageBackground />
      <Content>
        <UserInfo>
          <UserPicture src="https://avatars.githubusercontent.com/u/57533948?v=4"/>
          <div>
            <h4>Iago Gonçalves</h4>
            <p>Há 8 minutos</p>
          </div>
        </UserInfo>
        <PostInfo>
          <h4>Projeto para o curso de React</h4>
          <p>Projeto feito para o curso de react na formação React dio... <strong>Saiba mais</strong></p>
        </PostInfo>
        <HasInfo>
          <h4>#HTML # CSS # JavaScript</h4>
          <p>
            <FiThumbsUp /> 10
          </p>
        </HasInfo>
      </Content>
    </CardContainer>
  )
}

export default Card