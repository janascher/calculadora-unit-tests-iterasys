const calculadora = require('../src/calculadora')

test('somar 2 + 3', () => {
    // AAA == Chamado de 3A -> Maneira de organizar o teste
    // Arrange, Act, Assert
    // Configura, Executa, Valida

    // Arrange - Dados de entrada e saída (resultado esperado)
    const num1 = 2
    const num2 = 3
    const resultadoEsperado = 5

    // Act - 
    const resultadoObtido = calculadora.soma(num1, num2)

    // Assert
    expect(resultadoObtido).toBe(resultadoEsperado)
})

test('subtrair 3 - 1', () => {
    const num1 = 3
    const num2 = 1
    const resultadoEsperado = 2

    const resultadoObtido = calculadora.subtracao(num1, num2)

    expect(resultadoObtido).toBe(resultadoEsperado)
})

test('multiplicar 3 * 6', () => {
    const num1 = 3
    const num2 = 6
    const resultadoEsperado = 18

    const resultadoObtido = calculadora.multiplicacao(num1, num2)

    expect(resultadoObtido).toBe(resultadoEsperado)
})

test('dividir 7 / 2', () => {
    const num1 = 7
    const num2 = 2
    const resultadoEsperado = 3.5

    const resultadoObtido = calculadora.divisao(num1, num2)

    expect(resultadoObtido).toBe(resultadoEsperado)
})

test('dividir por zero', () => {
    const num1 = 7
    const num2 = 0
    const resultadoEsperado = Infinity

    const resultadoObtido = calculadora.divisao(num1, num2)

    expect(resultadoObtido).toBe(resultadoEsperado)
    if (resultadoObtido == Infinity) {
        console.log('Não é possível dividir por zero');
        
    }
})

// DDT
// Data-Driven Testing
// Teste Dirigido por Dados (Massa de Teste)
let massaDivisao = [
    [7, 2, 3.5],
    [7, 0, Infinity],
    [4, 0.25, 16]
]

test.each(massaDivisao)('dividir %f / %f', (num1, num2, resultadoEsperado) => {
    // Arrange
    // Vem da lista acima (massaDivisão)

    // Act
    const resultadoObtido = calculadora.divisao(num1, num2)

    // Assert
    expect(resultadoObtido).toBe(resultadoEsperado)
    if (resultadoObtido == Infinity) {
        console.log('Não é possível dividir por zero');
        
    }
})