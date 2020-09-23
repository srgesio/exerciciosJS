function investSimples(inicial, taxaDeJuros, tempo) {
    let juros = inicial * taxaDeJuros * tempo
    let montante = juros + inicial
    return montante
}

function investComposto(inicial, taxaDeJuros, tempo) {
    let montante = inicial * Math.pow((1 + taxaDeJuros), tempo)
    return montante

}
function transformarEmReais(n) {
    let numeroComDecimais = n.toFixed(2)
    let numeroEmTexto = numeroComDecimais.toString()
    numeroEmTexto = numeroEmTexto.replace('.', ',')
    let texto = 'R$ '.concat(numeroEmTexto)
    return texto

}
function investidor() {
    let inicial = 1
    let taxaDeJuros = 0.2
    let tempo = 20

    console.log(`Capital Inicial: ${inicial}`)
    console.log(`Taxa de Juros (mês): ${taxaDeJuros * 100}%`)
    console.log(`Duração: ${tempo} Meses`)
    console.log(`▒▒▒▒▒▒Montante (Simples): ${transformarEmReais(investSimples(inicial, taxaDeJuros, tempo))} ▒▒▒▒▒▒`)
    console.log(`▒▒▒▒▒▒Montante (Composto): ${transformarEmReais(investComposto(inicial, taxaDeJuros, tempo))} ▒▒▒▒▒▒`)

}

investidor()