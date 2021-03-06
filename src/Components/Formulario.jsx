import React, { Fragment, useState } from 'react'
import styled from '@emotion/styled'
import { obtenerDiferenciaYear, calcularMarca, obtenerPlan } from '../helper'

const Campo = styled.div`
    display:flex;
    margin-bottom: 1rem;
    align-items:center;
`

const Label = styled.label`
    flex: 0 0 100px;

`
const Select = styled.select`
    display: block;
    width: 100%;
    padding: 1rem;
    border: 1px solid #e1e1e1;
    --webkit-appearance: none;
`
const InputRadio = styled.input`
    margin: 0 1rem;
`
const Button = styled.button`
    background-color: #00838F;
    font-size: 16px;
    width: 100%;
    padding: 1rem;
    color: #FFFFFF;
    text-transform: uppercase;
    font-weight: bold;
    border: none;
    transition: background-color .3s ease;
    margin-top: 2rem;
    &:hover{
        cursor: pointer;
        background-color: #26C6DA;
    }
`

const Error = styled.div`
    background-color: red;
    color:white;
    padding:1rem;
    width: 100%;
    text-align: center;
    margin-bottom: 2rem;
    
`


const Formulario = ({setResumen, setCargando}) => {

    const [datos, setDatos] = useState({
        marca : '',
        year : '',
        plan : ''
    })

    const [error, setError] = useState(false)
    // Estraer los valores del state
    const { marca, year , plan } = datos
    // Leer los datos del formulario y colocarlos en el state.
    const obtenerInformacionFormularion = e =>{
        setDatos({
            ...datos,
            [e.target.name]: e.target.value
        })

    }

    const cotizarSeguro = e =>{
        e.preventDefault();
        if(marca.trim() === '' || year.trim() === '' || plan.trim() === ''){
            setError(true)
            return
        }
        setError(false)
        let resultado = 2000
        // Obtener la diferencia de años
        const diferencia = obtenerDiferenciaYear(year)
        
        resultado -= ((diferencia * 3 ) * resultado) / 100
        // por cada año hay que restar el 3%
        // Americano 15%
        // Asiatico 5%
        // Europeo 30%
        resultado = calcularMarca(marca) * resultado
        // Basico aumenta 20%
        // Completo aumenta 50%
        const incrementoPlan = obtenerPlan(plan)
        // Total
        resultado = parseFloat(incrementoPlan * resultado).toFixed(2)
        setCargando(true)
        setTimeout(() => {
            // Oculta el spinner
            setCargando(false)
            // Pasa la informacion al componente principal
            setResumen({
                cotizacion : resultado,
                datos
            })            
        }, 2000);
        
        
    }

    return (
        <Fragment>
            <form action="" onSubmit={cotizarSeguro}>
                {
                    error ? <Error>Todos los campos son obligatorios</Error> : null  
                }
                <Campo>
                    <Label htmlFor="marca">Marca</Label>
                    <Select
                        name='marca'
                        value={marca}
                        onChange={obtenerInformacionFormularion}
                    >
                        <option value="">-- Seleccione --</option>
                        <option value="americano">Americano</option>
                        <option value="europeo">Europeo</option>
                        <option value="asiatico">Asiatico</option>
                    </Select>
                </Campo>
                <Campo>
                    <Label htmlFor="fecha">Año</Label>
                    <Select
                        name="year"
                        value={year}
                        onChange={obtenerInformacionFormularion}
                    >
                        <option value="">-- Seleccione --</option>
                        <option value="2021">2021</option>
                        <option value="2020">2020</option>
                        <option value="2019">2019</option>
                        <option value="2018">2018</option>
                        <option value="2017">2017</option>
                        <option value="2016">2016</option>
                        <option value="2015">2015</option>
                        <option value="2014">2014</option>
                        <option value="2013">2013</option>
                        <option value="2012">2012</option>
                    </Select>
                </Campo>
                <Campo>
                    <Label htmlFor="plan">Plan</Label>
                    <InputRadio 
                        type="radio" 
                        name="plan" 
                        id="" 
                        value="completo"
                        checked={plan === 'completo'}
                        onChange={obtenerInformacionFormularion}
                        />Completo
                    <InputRadio 
                        type="radio" 
                        name="plan" 
                        id="" 
                        value="basico"
                        onChange={obtenerInformacionFormularion}
                        checked={plan === 'basico'}/> Basico
                </Campo>
                <Button type="submit">Cotizador</Button>
            </form>              
        </Fragment>
    )
}

export default Formulario
