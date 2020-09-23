let numeros = [-1, -2, -3, -5, 10, 14, 15, 29]

function qtdNegativos(numeros) {
    let qtdNegativos = 0

    numeros.forEach(num => {
        if (num > 0) {
            qtdNegativos++
        }
    })
    console.log(`${qtdNegativos} numéros negativos`)
}

qtdNegativos(numeros)