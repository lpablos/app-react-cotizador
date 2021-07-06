import React, {Fragment} from 'react'
import Header from './Components/Header'
import styled from '@emotion/styled'
import Formulario from './Components/Formulario'

const Contenedor = styled.div`
  max-width: 600 px;
  margin: 0 auto;
`

const ContenedorFormulario = styled.div`
  background-color: #FFFFFF;
  padding: 3rem;
`

const App = () => {
  return (
    <Fragment>
      <Contenedor>
        <Header titulo='Cotizador de Seguros'/>
        <ContenedorFormulario>
          <Formulario/>
        </ContenedorFormulario>
      </Contenedor>
    </Fragment>
  )
}

export default App

