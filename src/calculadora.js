let soma = function soma(num1, num2) {
    let resultado = 0
    resultado = num1 + num2
    return resultado
}

let subtracao = function subtracao(num1, num2) {
    return num1 - num2
}

let multiplicacao = (num1, num2) => num1 * num2

let divisao = (num1, num2) => num1 / num2

module.exports = {
    soma,
    subtracao,
    multiplicacao,
    divisao
}