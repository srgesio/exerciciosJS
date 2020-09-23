function imprimeCedulas(valor) {
    let dinheiro = Dinheiro(valor)
    let dinheiros = cedulas(dinheiro)
    console.log(`Para R$ ${dinheiros.valorReal} foram usadas:`)
    console.log(`► ${dinheiros.qtdCem} notas de R$ 100`)
    console.log(`► ${dinheiros.qtdCinquenta} notas de R$ 50`)
    console.log(`► ${dinheiros.qtdDez} notas de R$ 10`)
    console.log(`► ${dinheiros.qtdCinco} notas de R$ 5`)
    console.log(`► ${dinheiros.qtdUm} moedas de R$ 1`)
}


function Dinheiro(valor) {

    return {
        qtdCem: 0,
        qtdCinquenta: 0,
        qtdDez: 0,
        qtdCinco: 0,
        qtdUm: 0,
        valor: valor,
        valorReal: valor
    }

}


function cedulas(dinheiro) {
    // console.log(`Dinheiro: ${dinheiro.valor}`)
    if (dinheiro.valor >= 100) {
        dinheiro.qtdCem++
        dinheiro.valor = dinheiro.valor - 100
        cedulas(dinheiro)
    } else if (dinheiro.valor >= 50) {
        dinheiro.qtdCinquenta++
        dinheiro.valor = dinheiro.valor - 50
        cedulas(dinheiro)
    } else if (dinheiro.valor >= 10) {
        dinheiro.qtdDez++
        dinheiro.valor = dinheiro.valor - 10
        cedulas(dinheiro)
    } else if (dinheiro.valor >= 5) {
        dinheiro.qtdCinco++
        dinheiro.valor = dinheiro.valor - 5
        cedulas(dinheiro)
    } else if (dinheiro.valor >= 1) {
        dinheiro.qtdUm++
        dinheiro.valor = dinheiro.valor - 1
        cedulas(dinheiro)
    }
    return dinheiro
}

imprimeCedulas(156)
// cedulas(200)