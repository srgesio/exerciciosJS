function isBissexto(ano) {
    if (ano % 400 == 0) {
        console.log(`${ano} é Bissexto!`)
        return true
    } else if (ano % 100 == 0) {
        console.log(`${ano} não é Bissexto!`)
        return false
    } else if (ano % 4 == 0) {
        console.log(`${ano} é Bissexto!`)
        return true
    } else {
        console.log(`${ano} não é Bissexto!`)
        return false
    }
}

isBissexto(4000)