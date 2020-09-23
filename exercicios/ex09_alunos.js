function situacaoAluno(nota) {

    if (validar(nota)) {
        let situacao
        let arredondada = arredondar(nota)
        if ((arredondada - nota) < 3) {
            if (arredondada >= 40) {
                situacao = `Aprovado com Nota: ${arredondada}`
            } else {
                situacao = `Reprovado com Nota: ${arredondada}`
            }
            console.log(situacao)
            return situacao
        } else {
            console.log(`A Nota ${nota} é inválida!`)
        }
    }



}

function arredondar(nota) {
    let resto = nota % 5

    if (resto == 0) {
        let newNota = nota
        return newNota
    } else {
        nota++
        newNota = arredondar(nota)
        return newNota
    }
}

function validar(nota) {
    if (nota > 100 || nota < 0) {
        return false
    } else {
        return true
    }
}

situacaoAluno(37)
situacaoAluno(100)