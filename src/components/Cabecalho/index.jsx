import styled from "styled-components";
import CampoTexto from "../CampoTexto";

const HeaderStyled = styled.header`
  padding: 60px 0%;
  display: flex;
  justify-content: space-between;
  img {
    max-width: 212px;
  }
`;

export default function Cabecalho() {
  return (
    <div>
      <HeaderStyled>
        <img src="/images/logo.png" alt="" />
        <CampoTexto></CampoTexto>
      </HeaderStyled>
    </div>
  );
}
