let numeros = [10, 20, 5, 15, 25, 38, 14]

mediaAritmetica(numeros)

function mediaAritmetica(numeros) {
    let somaTotal = 0
    numeros.forEach(numero => somaTotal = somaTotal + numero);
    let qtd = numeros.length
    let media = somaTotal / qtd

    console.log(`▒Média: ${media.toFixed(2)}▒`)
    return media
}