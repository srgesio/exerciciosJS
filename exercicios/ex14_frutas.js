/*
Caso maçã, retorne no console: “Não vendemos esta fruta aqui”.
Caso kiwi, retorne: “Estamos com escassez de kiwis”.
Caso melancia, retorne: “Aqui está, são 3 reais o quilo”.
*/
''

function temFruta(fruta) {
    let frutas = fruta.toUpperCase()
    switch (frutas) {
        case 'MAÇÃ': case 'MACA': case 'MAÇA': case 'MACÃ':
            console.log('Não vendemos esta fruta aqui')
            break;
        case 'KIWI':
            console.log('Estamos com escassez de kiwis')
            break;
        case 'MELANCIA':
            console.log('Aqui está, são 3 reais o quilo')
            break;

        default:
            console.log('Nunca nem vi, tente outra coisa')
            break;
    }
}

temFruta('Maçã')
temFruta('Melancia')
temFruta('Kiwi')
temFruta('Banana')