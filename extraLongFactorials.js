function extraLongFactorials(n) {

    let resultado = 1n

    for (let i = 1; i <= n; i++) {
        let fatorial = BigInt(i)
        resultado = resultado * fatorial
    }

    return resultado.toString().replace("n", "")
}

const n = 25;

const result = extraLongFactorials(n)
console.log(result)