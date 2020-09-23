function delta(a, b, c) {
    let delta = Math.pow(b, 2) - 4 * a * c
    return delta
}

function baskara(a, b, c) {
    b = b * (-1)
    let raizDelta = Math.sqrt(delta(a, b, c))
    let divisor = 2 * a
    let mais = (b + raizDelta) / divisor
    let menos = (b - raizDelta) / divisor
    let x = [mais, menos]

    return x
}

console.log(baskara(1, -1, -6))

