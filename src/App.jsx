import styled from "styled-components";
import EstiloGlobal from "./components/EstiloGlobal";
import Cabecalho from "./components/Cabecalho";
import BarraLateral from "./components/BarraLateral";
import TituloEstilizado from "./components/TituloEstilizado";
import Galeria from "./components/Galeria";

import fotos from "./fotos.json";
import { useState } from "react";

const FundoGradiente = styled.div`
  background: linear-gradient(
    174.61deg,
    #041833 4.16%,
    #04244f 48%,
    #154580 96.76%
  );
  width: 100%;
  min-height: 100vh;
`;

const AppContainer = styled.div`
  display: flex;
  gap: 24px;
  width: 1440px;
  max-width: 100%;
  margin: 0% auto;
`;

const MainContainer = styled.main`
  flex: 1;
`;

function App() {
  const [fotosDaGaleria, setFotos] = useState(fotos);

  return (
    <FundoGradiente>
      <EstiloGlobal />
      <Cabecalho />
      <AppContainer>
        <BarraLateral />
        <MainContainer>
          <TituloEstilizado>
            A galeria mais completa de fotos do espaço!
          </TituloEstilizado>
          <Galeria fotos={fotosDaGaleria} />
        </MainContainer>
      </AppContainer>
    </FundoGradiente>
  );
}

export default App;
