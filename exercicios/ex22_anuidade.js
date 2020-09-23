function anuidade(mes, valor) {
    if (mes == 1) {
        console.log(`Anuidade para Janeiro: ${toReal(valor)}`)
        return valor
    } else if (mes > 1) {
        valor = valor + juroComposto(valor, 0.05, mes - 1)
        switch (mes) {
            case 2:
                console.log(`Anuidade para Fevereiro: ${toReal(valor)}`)
                break
            case 3:
                console.log(`Anuidade para Março: ${toReal(valor)}`)
                break
            case 4:
                console.log(`Anuidade para Abril: ${toReal(valor)}`)
                break
            case 5:
                console.log(`Anuidade para Maio: ${toReal(valor)}`)
                break
            case 6:
                console.log(`Anuidade para Junho: ${toReal(valor)}`)
                break
            case 7:
                console.log(`Anuidade para Julho: ${toReal(valor)}`)
                break
            case 8:
                console.log(`Anuidade para Agosto: ${toReal(valor)}`)
                break
            case 9:
                console.log(`Anuidade para Setembro: ${toReal(valor)}`)
                break
            case 10:
                console.log(`Anuidade para Outubro: ${toReal(valor)}`)
                break
            case 11:
                console.log(`Anuidade para Novembro: ${toReal(valor)}`)
                break
            case 12:
                console.log(`Anuidade para Dezembro: ${toReal(valor)}`)
                break
            default:
                console.log('Mês inválido')
                break

        }


        return valor
    }
}
function juroComposto(inicial, taxaDeJuros, tempo) {
    let montante = inicial * Math.pow((1 + taxaDeJuros), tempo)
    return montante

}
function toReal(n) {
    let numeroComDecimais = n.toFixed(2)
    let numeroEmTexto = numeroComDecimais.toString()
    numeroEmTexto = numeroEmTexto.replace('.', ',')
    let texto = 'R$ '.concat(numeroEmTexto)
    return texto
}

anuidade(1, 100)
anuidade(2, 100)
anuidade(3, 100)
anuidade(6, 100)
anuidade(12, 100)