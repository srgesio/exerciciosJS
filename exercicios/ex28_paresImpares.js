let numeros = [1, 2, 5, 8, 9, 10]

function qtdParesImpares(numeros) {
    let par = 0
    let impar = 0
    numeros.forEach(num => {
        if (num % 2 == 0) {
            par++
        } else {
            impar++
        }
    })
    console.log(`${par} pares e ${impar} impares`)
}

qtdParesImpares(numeros)