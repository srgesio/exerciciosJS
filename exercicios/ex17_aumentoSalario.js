function transformarEmReais(n) {
    let numeroComDecimais = n.toFixed(2)
    let numeroEmTexto = numeroComDecimais.toString()
    numeroEmTexto = numeroEmTexto.replace('.', ',')
    let texto = 'R$ '.concat(numeroEmTexto)
    return texto
}



function aumentoSalario(plano, salarioAtual) {
    let planoDeTrabalho = plano.toUpperCase()
    switch (planoDeTrabalho) {
        case 'A':
            salarioAtual = salarioAtual + (salarioAtual * 0.10)
            break;
        case 'B':
            salarioAtual = salarioAtual + (salarioAtual * 0.15)
            break;
        case 'C':
            salarioAtual = salarioAtual + (salarioAtual * 0.20)
            break;

        default:
            console.log('Plano Inválido!')
            break;
    }
    let res = transformarEmReais(salarioAtual)
    console.log(`Novo Salário: [${plano.toUpperCase()}] ${res}`)
    return salarioAtual
}

console.log(aumentoSalario('c', 1000))