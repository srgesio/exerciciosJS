function toReal(n) {
    let numeroComDecimais = n.toFixed(2)
    let numeroEmTexto = numeroComDecimais.toString()
    numeroEmTexto = numeroEmTexto.replace('.', ',')
    let texto = 'R$ '.concat(numeroEmTexto)
    console.log(texto)
    return texto
}


// transformarEmReais(50.5555)
// export default transformarEmReais