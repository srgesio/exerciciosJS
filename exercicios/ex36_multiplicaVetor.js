let numeros = [0, 5, 8, 18, 60, 15]
let multi = 2
let mult = 5

console.log(multiplicaNumeros(numeros, multi))
console.log(multiplicaNumerosSeMaiorQueCinco(numeros, mult))


function multiplicaNumeros(numeros, multi) {
    let multFive = numeros.map(num => num * multi)
    return multFive
}
function multiplicaNumerosSeMaiorQueCinco(numeros, multi) {
    if (multi > 5) {
        let multFive = numeros.map(num => num * multi)
        return multFive
    } else {
        return numeros
    }
}