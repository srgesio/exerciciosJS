/*Código Descrição do Produto Preço
100 Cachorro Quente R$ 3,00
200 Hambúrguer Simples R$ 4,00
300 Cheeseburguer R$ 5,50
400 Bauru R$ 7,50
500 Refrigerante R$ 3,50
600 Suco R$ 2,80*/

function precoLanche(codigo, qtd) {
    let preco = 0
    switch (codigo) {
        case 100:
            preco = 3 * qtd
            break;
        case 200:
            preco = 4 * qtd
            break;
        case 300:
            preco = 5.50 * qtd
            break;
        case 400:
            preco = 7.50 * qtd
            break;
        case 500:
            preco = 3.50 * qtd
            break;
        case 600:
            preco = 2.80 * qtd
            break;

        default:
            console.log(`[ERRO] CÓDIGO ${codigo} INVÁLIDO`)
            break;
    }

    console.log(`Valor final do lanche: ${toReal(preco)}`)
    return preco
}



function toReal(n) {
    let numeroComDecimais = n.toFixed(2)
    let numeroEmTexto = numeroComDecimais.toString()
    numeroEmTexto = numeroEmTexto.replace('.', ',')
    let texto = 'R$ '.concat(numeroEmTexto)
    return texto
}

precoLanche(100, 5)