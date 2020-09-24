let stringA = "Açucar"
let stringB = "ABC"

console.log(contemTodasAsLetras(stringB, stringA))

function contemTodasAsLetras(stringA, stringB) {
    let letrasStringA = stringA.toLowerCase().split('')
    let letrasStringB = stringB.toLowerCase().split('')

    let contem = false

    if (letrasStringA.length <= letrasStringB.length) {
        for (let i = 0; i < letrasStringA.length; i++) {
            contem = letrasStringB.includes(letrasStringA[i])
            if (contem) { } else { return contem }
        }
    } else {
        for (let i = 0; i < letrasStringB.length; i++) {
            contem = letrasStringA.includes(letrasStringB[i])
            if (contem) { } else { return contem }
        }
    }
    return contem
}