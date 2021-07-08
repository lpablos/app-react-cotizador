import React, {Fragment, useState} from 'react'
import Header from './Components/Header'
import styled from '@emotion/styled'
import Formulario from './Components/Formulario'
import Resumen from './Components/Resumen'
import Resultado from './Components/Resultado'
import Spiner from './Components/Spiner'



const Contenedor = styled.div`
  max-width: 600px;
  margin: 0 auto;
`;
const ContenedorFormulario = styled.div`
  background-color: #FFF;
  padding: 3rem;
`

const App = () => {

  const [resumen, setResumen] = useState({
    cotizacion : 0,
    datos : {
      marca : '',
      year : '',
      plan : ''
    }
  })

  const [cargando, setCargando] = useState(false)

  const {datos, cotizacion} = resumen

  return (
    <Fragment>
      <Contenedor>
        <Header titulo='Cotizador de Seguros'/>
        <ContenedorFormulario>
          <Formulario
            setResumen={setResumen}
            setCargando = {setCargando}
          />
          { cargando ? <Spiner/> : null}          
          <Resumen datos={datos}/>
          { !cargando ? <Resultado cotizacion={cotizacion}/>: null}
          
        </ContenedorFormulario>
      </Contenedor>
    </Fragment>
  )
}

export default App

