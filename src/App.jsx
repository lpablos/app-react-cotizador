import React, {Fragment, useState} from 'react'
import Header from './Components/Header'
import styled from '@emotion/styled'
import Formulario from './Components/Formulario'
import Resumen from './Components/Resumen'
import Resultado from './Components/Resultado'

const Contenedor = styled.div`
  max-width: 600 px;
  margin: 0 auto;
`

const ContenedorFormulario = styled.div`
  background-color: #FFFFFF;
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
  const {datos, cotizacion} = resumen

  return (
    <Fragment>
      <Contenedor>
        <Header titulo='Cotizador de Seguros'/>
        <ContenedorFormulario>
          <Formulario
            setResumen={setResumen}
          />
          <Resumen datos={datos}/>
          <Resultado cotizacion={cotizacion}/>
        </ContenedorFormulario>
      </Contenedor>
    </Fragment>
  )
}

export default App

