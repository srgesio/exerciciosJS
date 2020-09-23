function porExtenso(num) {
    let numText
    switch (num) {

        case 1:
            numText = 'Um'
            console.log(`${numText}`)
            break;
        case 2:
            numText = 'Dois'
            console.log(`${numText}`)
            break;
        case 3:
            numText = 'Três'
            console.log(`${numText}`)
            break;
        case 4:
            numText = 'Quatro'
            console.log(`${numText}`)
            break;
        case 5:
            numText = 'Cinco'
            console.log(`${numText}`)
            break;
        case 6:
            numText = 'Seis'
            console.log(`${numText}`)
            break;
        case 7:
            numText = 'Sete'
            console.log(`${numText}`)
            break;
        case 8:
            numText = 'Oito'
            console.log(`${numText}`)
            break;
        case 9:
            numText = 'Nove'
            console.log(`${numText}`)
            break;
        case 10:
            numText = 'Dez'
            console.log(`${numText}`)
            break;

        default:
            console.log(`${num} está fora do Intervalo`)
            break;
    }
    return numText
}

porExtenso(10)