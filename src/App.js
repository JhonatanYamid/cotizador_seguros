import Header from "./components/Header";
import styled from "@emotion/styled";
import Formulario from "./components/Formulario";
import { useState } from "react";
import Resumen from "./components/Resumen";
import Resultado from "./components/Resultado";
import Spinner from "./components/Spinner";

const Contenedor = styled.div`
  max-width: 600px;
  margin: 0 auto;
`
const ContenedorFormulario = styled.div`
  background-color: #FFF;
  padding: 3rem;
`

function App() {

  const [resumen, guardarResumen] = useState({
    cotizacion: 0,
    datos: {
      marca: '',
      year: '',
      plan: ''
    }
  })

  const [cargando, guradarCargando] = useState(false)

  //extraer datos
  const { cotizacion, datos } = resumen;

  return (
    <Contenedor>
      <Header titulo="Cotizador de seguros" />
      <ContenedorFormulario>
        <Formulario
          guardarResumen={guardarResumen}
          guradarCargando={guradarCargando}
        />
        {cargando
          ? <Spinner />
          :
          <div>
            <Resumen datos={datos} />
            <Resultado
              cotizacion={cotizacion}
            />
          </div>}

      </ContenedorFormulario>
    </Contenedor>
  );
}

export default App;
