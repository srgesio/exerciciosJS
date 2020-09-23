function compraCarro(carro) {

    let carros = carro.toUpperCase()
    switch (carros) {
        case 'HATCH':
            console.log('Compra efetuada com sucesso!')
            break;
        case 'SEDAN':
            console.log(`Tem certeza que não prefere este modelo?`)
            break;
        case 'MOTOCICLETA':
            console.log(`Tem certeza que não prefere este modelo?`)
            break;
        case 'CAMINHONETE':
            console.log(`Tem certeza que não prefere este modelo?`)
            break;

        default:
            console.log(`Não trabalhamos com este tipo de automóvel aqui!`)
            break;
    }
}

compraCarro('hatch')
compraCarro('sedan')
compraCarro('motocicleta')
compraCarro('caminhonete')
compraCarro('banana')