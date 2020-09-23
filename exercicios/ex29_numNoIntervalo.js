let numeros = [1, 2, 5, 8, 9, 10, 20, 18, 16, 14]

function inIntervalo(numeros) {
    let dentro = 0
    let fora = 0
    numeros.forEach(num => {
        if (num >= 10 && num <= 20) {
            dentro++
        } else {
            fora++
        }
    })
    console.log(`${dentro} dentro e ${fora} fora do intervalo`)
}

inIntervalo(numeros)