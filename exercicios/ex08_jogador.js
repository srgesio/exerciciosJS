const jogos = {
    listaJogos: [5, 2, 3, 4, 10, 12, 1],
    qtdVezesQueBateuRecord: 0,
    piorPontuacao: 0,
    maiorPontuacao: 0,
    piorJogo: 0,
    melhorJogo: 0
}
function analisaJogos(jogos) {
    jogos.maiorPontuacao = jogos.listaJogos[0]
    jogos.melhorJogo = 0
    jogos.piorPontuacao = jogos.listaJogos[0]
    jogos.piorJogo = 0
    for (let i in jogos.listaJogos) {
        if (jogos.listaJogos[i] > jogos.maiorPontuacao) {
            jogos.qtdVezesQueBateuRecord++
            jogos.maiorPontuacao = jogos.listaJogos[i]
            jogos.melhorJogo = jogos.listaJogos.indexOf(jogos.maiorPontuacao) + 1
        }
        if (jogos.listaJogos[i] < jogos.piorPontuacao) {
            jogos.piorPontuacao = jogos.listaJogos[i]
            jogos.piorJogo = jogos.listaJogos.indexOf(jogos.piorPontuacao) + 1
        }
    }
    return jogos
}

let games = analisaJogos(jogos)

console.log(`Pontuações: ${games.listaJogos}`)
console.log(`Bateu o Record ${games.qtdVezesQueBateuRecord} vezes`)
console.log(`Pior pontuação: ${games.piorPontuacao}`)
console.log(`Maior pontuação: ${games.maiorPontuacao}`)
console.log(`O ${games.piorJogo}º jogo foi o pior`)
console.log(`O ${games.melhorJogo}º jogo foi o melhor`)



