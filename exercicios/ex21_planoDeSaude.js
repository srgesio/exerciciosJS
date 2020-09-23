/*
1) crianças com menos de 10 anos pagam R$80;
2) conveniados com idade entre 10 e 30 anos pagam R$50;
3) conveniados com idade acima de 30 e até 60 anos pagam R$ 95; e
4) conveniados acima de 60 anos pagam R$130
*/

function precoPlanoDeSaude(idade) {
    const taxaPadrao = 100
    let adicional
    let valorFinal
    if (idade < 10) {
        adicional = 80
        valorFinal = taxaPadrao + adicional
        console.log(`Valor final é: ${toReal(valorFinal)}`)
        return valorFinal
    } else if (idade <= 30) {
        adicional = 50
        valorFinal = taxaPadrao + adicional
        console.log(`Valor final é: ${toReal(valorFinal)}`)
        return valorFinal
    } else if (idade <= 60) {
        adicional = 95
        valorFinal = taxaPadrao + adicional
        console.log(`Valor final é: ${toReal(valorFinal)}`)
        return valorFinal
    } else if (idade > 60) {
        adicional = 130
        valorFinal = taxaPadrao + adicional
        console.log(`Valor final é: ${toReal(valorFinal)}`)
        return valorFinal
    }
}

function toReal(n) {
    let numeroComDecimais = n.toFixed(2)
    let numeroEmTexto = numeroComDecimais.toString()
    numeroEmTexto = numeroEmTexto.replace('.', ',')
    let texto = 'R$ '.concat(numeroEmTexto)
    return texto
}

precoPlanoDeSaude(65)