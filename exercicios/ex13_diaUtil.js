function isDiaUtil(dia) {
    if (dia <= 31 && dia >= 1) {
        switch (reduc(dia)) {

            case 1:
                console.log(`[DIA ${dia}] - Domingo`)
                break;
            case 2:
                console.log(`[DIA ${dia}] - Segunda feira`)
                break;
            case 3:
                console.log(`[DIA ${dia}] - Terça feira`)
                break;
            case 4:
                console.log(`[DIA ${dia}] - Quarta feira`)
                break;
            case 5:
                console.log(`[DIA ${dia}] - Quinta feira`)
                break;
            case 6:
                console.log(`[DIA ${dia}] - Sexta feira`)
                break;
            case 7:
                console.log(`[DIA ${dia}] - Sábado`)
                break;
            default:
                console.log('Dia inválido!')
                break;
        }
    } else {
        console.log(`${dia} Dia inválido!!!`)
    }
}

function reduc(dia) {
    if (dia <= 7) {
        return dia
    } else {

        let newDia = reduc(dia - 7)
        return newDia
    }


}


isDiaUtil(31)
isDiaUtil(50)