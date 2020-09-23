function fat(num) {

    if (num == 1) {
        let fatorial = num
        return fatorial
    } else {
        fatorial = num + fat(num - 1)
    }
    return fatorial
}

console.log(fat(4))