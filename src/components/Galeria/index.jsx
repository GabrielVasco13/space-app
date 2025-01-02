import styled from "styled-components";
import Titulo from "../Titulo";
import Tags from "./Tags";
import Populares from "./Populares";
import Imagem from "./Imagem";

const GaleriaContainer = styled.div`
  display: flex;
`;

const SecaoFluida = styled.section`
  flex-grow: 1;
`;

const TagsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  padding-top: 24px;
`;

const StyledParagraph = styled.p`
  color: #ffffff;
  font-size: 20px;
  padding-right: 32px;
`;

const ImagensContainer = styled.section`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 24px;
`;

export default function Galeria({ fotos = [] }) {
  return (
    <>
      <TagsContainer>
        <StyledParagraph>Busque por tags:</StyledParagraph>
        <Tags />
      </TagsContainer>
      <GaleriaContainer>
        <SecaoFluida>
          <Titulo>Navegue pela galeria</Titulo>
          <ImagensContainer>
            {fotos.map((foto) => (
              <Imagem key={foto.id} foto={foto} />
            ))}
          </ImagensContainer>
        </SecaoFluida>
        <Populares />
      </GaleriaContainer>
    </>
  );
}
