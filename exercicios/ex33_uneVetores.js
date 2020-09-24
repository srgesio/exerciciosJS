let vetorInteiro = [10, 15, 20, 30]
let vetorString = ['Azul', 'Laranja', 'Roxo', 'Amarelo']
let vetorDouble = [5.1, 5.2, 5.44, 0.45]

uneVetores(vetorInteiro, vetorString, vetorDouble)

function uneVetores(vetorInteiro, vetorString, vetorDouble) {
    let vetorFinal = vetorInteiro.concat(vetorString.concat(vetorDouble))

    console.log(vetorFinal)

    return vetorFinal

}