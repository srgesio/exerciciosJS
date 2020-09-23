function tipoDoTriangulo(anguloX, anguloY, anguloZ) {
    const anguloTotal = 180
    let somaTotal = anguloX + anguloY + anguloZ
    if (anguloX <= 0 || anguloY <= 0 || anguloZ <= 0) {
        console.log('[Erro] Triângulo inválido')
        console.log('[Motivo] Ângulos não podem ser 0')
    } else if (somaTotal > 180) {
        console.log('[Erro] Triângulo inválido')
        console.log('[Motivo] A Soma Total dos Ângulos não pode ser maior que 180')
    } else if ((anguloX + anguloY) < anguloZ || (anguloX + anguloZ) < anguloY || (anguloZ + anguloY) < anguloX) {
        console.log('[Erro] Triângulo inválido')
        console.log('[Motivo] A Soma de dois Ângulos não pode ser menor que o terceiro')
    } else {
        if (anguloX == anguloY && anguloX == anguloZ && anguloY == anguloZ) {
            console.log('▒▒▒▒▒▒  Triângulo Equilátero  ▒▒▒▒▒▒▒')
        } else if (anguloX == anguloY || anguloX == anguloZ || anguloY == anguloZ) {
            console.log('▒▒▒▒▒▒  Triângulo Isóceles  ▒▒▒▒▒▒▒')

        } else if (anguloX != anguloY && anguloX != anguloZ && anguloY != anguloZ) {
            console.log('▒▒▒▒▒▒  Triângulo Escaleno ▒▒▒▒▒▒▒')
        }
    }

}

tipoDoTriangulo(60, 60, 60)
tipoDoTriangulo(50, 50, 80)
tipoDoTriangulo(75, 25, 80)

console.log("---------------------------")
tipoDoTriangulo(0, 10, 10)
tipoDoTriangulo(100, 100, 100)
tipoDoTriangulo(40, 40, 100)