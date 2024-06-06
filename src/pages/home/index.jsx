import Header from "../../components/Header";
import Button from "../../components/Button";
import { Container, TextContent, Title, TitleHighlight } from "./styles";

import bannerImage from '../../assets/banner.png'
import { useNavigate } from "react-router-dom";

function Home() {

  const navigate = useNavigate();
  const handleClickSignIn = () => {
    navigate('/login')
  }

  return (
    <>
      <Header />
      <Container>
        <div>
          <Title> 
            <TitleHighlight>Implemente<br/></TitleHighlight>
            O seu futuro global agora!
          </Title>
          <TextContent>
            Domine as tecnologias utilizadas pelas empresas mais inovadoras do mundo e encare seu novo desafio profissional, evoluindo em comunidade com os melhores experts.
          </TextContent>
          <Button title="Começar agora" variant="secondary" onClick={handleClickSignIn} />
        </div>
        <div>
          <img src={bannerImage} alt="" />
        </div>
      </Container>
    </>
  )
}

export default Home;