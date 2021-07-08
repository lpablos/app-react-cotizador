// Obtener la diferencia por año
export function obtenerDiferenciaYear(year){
    return new Date().getFullYear() - year
}
// Calcular el incremento de la marca
export function calcularMarca(marca){
    let incremento
    switch (marca) {
        case 'americano':
            incremento = 1.15
            break;
        case 'europeo':
            incremento = 1.30
            break;
        case 'asiatico':
            incremento = 1.05
            break;
        default:
            break;
    }
    return incremento
}
// Calular el plan que se seleciona
export function obtenerPlan(plan){
    return (plan === 'basico')? 1.20 : 1.50
}

// Mostrar la primera letra en mayuscula

export function primeraMayuscula(texto){
    return texto.charAt(0).toUpperCase() + texto.slice(1)
}