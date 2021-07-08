import React, { Fragment } from 'react'
import styled from '@emotion/styled'
import {primeraMayuscula} from '../helper'

const ContenedorResumen  = styled.div`
    padding: 1rem;
    text-align: center;
    background-color:#00838F;
    color: #FFFFFF;
    margin-top: 1rem;
`

const Resumen = ({datos}) => {
    // Extraer los datos
    const {marca, year, plan} = datos

    if(marca === '' || year === '' || plan === '') return null

    return (
        <Fragment> 
            <ContenedorResumen>
                <h2>Resumen de cotizacion</h2> 
                <ul>
                    <li>Marca : { primeraMayuscula(marca) }</li>
                    <li>Año : { primeraMayuscula(year) }</li>
                    <li>Plan : { primeraMayuscula(plan) }</li>
                </ul>           
            </ContenedorResumen>
        </Fragment>
    )
}

export default Resumen
