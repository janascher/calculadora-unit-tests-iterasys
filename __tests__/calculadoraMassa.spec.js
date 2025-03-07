const calculadora = require('../src/calculadora')

// Referência a massa de teste
const massa = require('../fixtures/massa')

// Soma
test.each(massa.array.map(bloco => [
   bloco.num1,
   bloco.num2,
   bloco.esperadoSoma
]))('somar %f + %f com massa', (num1, num2, resultadoEsperado) => {
        // Act
        const resultadoObtido = calculadora.soma(num1, num2)

        // Assert
        expect(resultadoObtido).toBe(resultadoEsperado)
    })

// Subtrair
test.each(massa.array.map(bloco => [
   bloco.num1,
   bloco.num2,
   bloco.esperadoSubtracao
]))('subtrair %f - %f com massa', (num1, num2, resultadoEsperado) => {
        // Act
        const resultadoObtido = calculadora.subtracao(num1, num2)

        // Assert
        expect(resultadoObtido).toBe(resultadoEsperado)
    })
    

// Multiplicar
test.each(massa.array.map(bloco => [
   bloco.num1,
   bloco.num2,
   bloco.esperadoMultiplicacao
]))('multiplicar %f * %f com massa', (num1, num2, resultadoEsperado) => {
        // Act
        const resultadoObtido = calculadora.multiplicacao(num1, num2)

        // Assert
        expect(resultadoObtido).toBe(resultadoEsperado)
    })

// Dividir
test.each(massa.array.map(bloco => [
   bloco.num1,
   bloco.num2,
   bloco.esperadoDivisao
]))('dividir %f / %f com massa', (num1, num2, resultadoEsperado) => {
        // Act
        const resultadoObtido = calculadora.divisao(num1, num2)

        // Assert
        expect(resultadoObtido).toBe(resultadoEsperado)
    })