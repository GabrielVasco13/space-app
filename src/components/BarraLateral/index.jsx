import styled from "styled-components";
import ItemNavegacao from "../ItemNavegacao";

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
          <ItemNavegacao
            iconeAtivo="/icons/home-ativo.png"
            iconeInativo="/icons/home-inativo.png"
            ativo={true}
          >
            Inicio
          </ItemNavegacao>
        </ListStyled>
        <ListStyled>
          <ItemNavegacao
            iconeAtivo="/icons/mais-vistas-ativo.png"
            iconeInativo="/icons/mais-vistas-inativo.png"
          >
            Mais vistas
          </ItemNavegacao>
        </ListStyled>
        <ListStyled>
          <ItemNavegacao
            iconeAtivo="/icons/mais-curtidas-ativo.png"
            iconeInativo="/icons/mais-curtidas-inativo.png"
          >
            Mais curtidas
          </ItemNavegacao>
        </ListStyled>
        <ListStyled>
          <ItemNavegacao
            iconeAtivo="/icons/novas-ativo.png"
            iconeInativo="/icons/novas-inativo.png"
          >
            Novas
          </ItemNavegacao>
        </ListStyled>
        <ListStyled>
          <ItemNavegacao
            iconeAtivo="/icons/surpreenda-me-ativo.png"
            iconeInativo="/icons/surpreenda-me-inativo.png"
          >
            Surpreenda-me
          </ItemNavegacao>
        </ListStyled>
      </nav>
    </aside>
  );
}
