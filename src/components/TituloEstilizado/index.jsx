import styled from "styled-components";

const ContainerStyled = styled.div`
  background-image: url("/images/Banner.png");
  background-size: cover;
  background-position: center;
  height: 328px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  border-radius: 16px;
`;

const TitleStyled = styled.h1`
  color: #ffffff;
  z-index: 1;
  padding-left: 64px;
  max-width: 300px;
  word-wrap: break-word;
  text-align: left;
`;

export default function TituloEstilizado({ children }) {
  return (
    <ContainerStyled>
      <TitleStyled>{children}</TitleStyled>
    </ContainerStyled>
  );
}
