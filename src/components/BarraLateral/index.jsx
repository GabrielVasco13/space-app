import styled from "styled-components";

const ListStyled = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  width: 212px;
  a {
    color: #d9d9d9;
    text-decoration: none;
  }
`;

export default function BarraLateral() {
  return (
    <aside>
      <nav>
        <ListStyled>
          <li>
            <a href="">Inicio</a>
          </li>
        </ListStyled>
        <ListStyled>
          <li>
            <a href="">Mais vistos</a>
          </li>
        </ListStyled>
      </nav>
    </aside>
  );
}
