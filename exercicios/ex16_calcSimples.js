function calcSimples(num1, operacao, num2) {

    switch (operacao) {
        case '+':
            console.log(`${num1} + ${num2} = ${num1 + num2}`)
            break;
        case '-':
            console.log(`${num1} - ${num2} = ${num1 - num2}`)
            break;
        case '*':
            console.log(`${num1} * ${num2} = ${num1 * num2}`)
            break;
        case '/':
            console.log(`${num1} / ${num2} = ${num1 / num2}`)
            break;

        default:
            console.log(`[ERRO] Tipo de operação errado`)
            break;
    }
}

calcSimples(1, '+', 1)
calcSimples(1, '-', 1)
calcSimples(1, '*', 1)
calcSimples(1, '/', 1)
calcSimples(1, '%', 1)