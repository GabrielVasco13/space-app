import styled from "styled-components";
import Titulo from "../Titulo";
import Tags from "./Tags";
import Populares from "./Populares";

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
`;

const StyledParagraph = styled.p`
  color: #ffffff;
  font-size: 20px;
  padding-right: 32px;
`;

export default function Galeria() {
  return (
    <>
      <h1>Tags</h1>
      <TagsContainer>
        <StyledParagraph>Busque por tags:</StyledParagraph>
        <Tags />
      </TagsContainer>
      <GaleriaContainer>
        <SecaoFluida>
          <Titulo>Navegue pela galeria</Titulo>
        </SecaoFluida>
        <Populares />
      </GaleriaContainer>
    </>
  );
}
