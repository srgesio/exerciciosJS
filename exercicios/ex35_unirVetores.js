let pilha = [1, 2, 3, 4, 5]
let adiciona = [6, 7, 8, 9, 10]

console.log(une(pilha, adiciona))


function une(pilha, adiciona) {
    pilha = pilha.concat(adiciona)
    return pilha
}