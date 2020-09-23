let alunos = [
    ['João', 3, 4, 5],
    ['Maria', 5, 5, 6],
    ['Francisca', 10, 10, 10],
    ['Juninho', 5, 10, 10],
    ['Rebeca', 2, 1, 3],
    ['Karol', 4, 5, 5]
]

function start(alunos) {

    alunos.forEach(aluno => {
        let alunoNovo = Aluno(aluno[0], aluno[1], aluno[2], aluno[3])
        alunoNovo = mediaPonderada(alunoNovo)
        alunoNovo = situacaoAluno(alunoNovo)
        mostraAluno(alunoNovo)
    });


}
function mostraAluno(aluno) {
    console.log('▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒')
    console.log(`Aluno ${aluno.cod}`)
    console.log(`1ª Nota: ${aluno.notas[0]}`)
    console.log(`2ª Nota: ${aluno.notas[1]}`)
    console.log(`3ª Nota: ${aluno.notas[2]}`)
    console.log(`Média:  ${aluno.media}`)
    console.log(`Situação: ▒▒ ${aluno.situacao} ▒▒`)
    console.log('▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒')
}




function Aluno(cod, nota1, nota2, nota3) {
    return {
        cod: cod,
        notas: [nota1, nota2, nota3],
        media: 0,
        situacao: 'APROVADO'
    }
}
function mediaPonderada(aluno) {
    let notas = aluno.notas
    let notasOrdenadas = notas.sort()
    notasOrdenadas = notas.reverse()
    let maiorNota = notasOrdenadas[0]
    let media = ((maiorNota * 4) + (notasOrdenadas[1] * 3) + (notasOrdenadas[2])) / 3
    if (media > 10) {
        aluno.media = 10
    } else {
        aluno.media = media.toFixed(2)
    }
    return aluno
}
function situacaoAluno(aluno) {
    if (aluno.media >= 5) {
        aluno.situacao = 'APROVADO'
    } else {
        aluno.situacao = 'REPROVADO'
    }
    return aluno
}

start(alunos)