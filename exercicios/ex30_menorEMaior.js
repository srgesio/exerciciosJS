let numeros = [18, 20, 5, 8, 9, 100]

function maiorMenor(numeros) {
    let maior = numeros[0]
    let menor = numeros[0]
    numeros.forEach(num => {
        console.log(num)
        if (num > maior) {
            maior = num
        } else if (num <= menor) {
            menor = num
        }
    })

    console.log(`${menor} menor e ${maior} maior`)
}

maiorMenor(numeros)