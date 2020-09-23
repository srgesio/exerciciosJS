
// crianca = [Altura(cm), Taxa de crescimento anual(%), se é maior ou menor]
let crianca1 = [100, 0.04,]
let crianca2 = [120, 0.03,]
let criancas = [crianca1, crianca2]
const ano = 2020

//TESTE
start(criancaMenor(crianca1, crianca2))
// console.log(criancaMenor(crianca1, crianca2))
// console.log(crescer(crianca1))
// console.log(ultrapassa(crianca1, crianca2))
// console.log(ultrapassaQuando(criancaMenor(crianca1, crianca2)))

function start(criancas) {
    let criancaMenor = criancas[0]
    let criancaMaior = criancas[1]

    let alturaOriginalMenor = criancaMenor[0]
    let alturaOriginalMaior = criancaMaior[0]
    console.log(criancas)
    if (ultrapassa(criancaMenor, criancaMaior)) {
        let anos = ultrapassaQuando(criancas)
        console.log(`Em ${anos} ano(s), a Criança de ${alturaOriginalMenor.toFixed(2)}cm de Altura, será mais alta que a Criança de ${alturaOriginalMaior.toFixed(2)}cm`)
    } else {
        console.log('Não há ultrapassagem de alturas entre as crianças')
    }

}

function crescer(crianca) {
    let altura = crianca[0]
    let taxaDeCrescimento = crianca[0] * crianca[1]
    crianca[0] = taxaDeCrescimento + altura
    return crianca
}

function ultrapassaQuando(criancas) {
    let qtdTempo = 0
    let criancaMenor = criancas[0]
    let criancaMaior = criancas[1]
    while (criancaMenor < criancaMaior) {
        criancaMenor = crescer(criancaMenor)
        criancaMaior = crescer(criancaMaior)
        qtdTempo++
        console.log(`Em ${qtdTempo} Ano(s) ----- Menor: ${criancaMenor[0].toFixed(2)}cm ▒▒ Maior: ${criancaMaior[0].toFixed(2)}cm`)
    }
    return qtdTempo++
}


function ultrapassa(criancaMenor, criancaMaior) {
    if (criancaMenor[1] > criancaMaior[1]) {
        console.log(`A criança menor vai ultrapassar a criança maior.`)
        return true
    } else {
        console.log(`As crianças nunca se ultrapassam em altura`)
        return false
    }
}

function criancaMenor(crianca1, crianca2) {
    let criancas = []
    if (crianca1[0] > crianca2[0]) {
        crianca1.push('maior')
        crianca2.push('menor')
        criancas.push(crianca2, crianca1)
        return criancas

    } else if (crianca1[0] < crianca2[0]) {
        crianca1.push('menor')
        crianca2.push('maior')
        criancas.push(crianca1, crianca2)
        return criancas
    } else {
        crianca1.push('igual')
        crianca2.push('igual')
        criancas.push(crianca1, crianca2)
        return criancas
    }
}