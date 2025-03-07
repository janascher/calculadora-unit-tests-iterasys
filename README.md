<div  align="center">
	<h1>
		🧪🧮 Projeto de Calculadora com Testes Unitários em Jest
	</h1>
</div>

## 🧐 Descrição

Este projeto foi desenvolvido durante as aulas do curso "Formação em Teste de Software" da [Iterasys](https://iterasys.com.br/pt), ministradas pelo professor José Correia. Ele visa demonstrar a aplicação de testes unitários utilizando Jest, abordando tanto testes simples quanto testes orientados por dados (DDT), onde a massa de teste é definida em formato JSON.

## 📚 Aprendizados
Durante as aulas e a construção deste projeto, foram abordados os seguintes tópicos:

- **Testes Unitários com Jest:** criação de testes unitários para validar o funcionamento de funções individuais (soma, subtração, multiplicação e divisão), utilizando a biblioteca Jest.
- **TDD (Test Driven Development):** prática de desenvolvimento orientado por testes, onde os testes são escritos antes da implementação do código, garantindo que cada funcionalidade seja testada desde o início.
- **DDT (Data Driven Testing):** implementação de testes dirigidos por dados, utilizando massa de teste em formato JSON para validar diferentes cenários com o mesmo código de teste, aumentando a cobertura e a eficiência dos testes.
- **Estrutura de Projetos de Teste:** organização de pastas e arquivos para um projeto de testes unitários, incluindo a separação de testes, código-fonte e massa de teste.
- **Metodologia AAA (Arrange, Act, Assert):** estruturação dos testes unitários seguindo a metodologia AAA (Arrange, Act, Assert) para melhor organização, legibilidade e manutenção do código de teste.

## 🚀 Funcionalidades Testadas

As seguintes funcionalidades da calculadora foram testadas:

- **Soma:** adição de dois números.
- **Subtração:** subtração de dois números.
- **Multiplicação:** multiplicação de dois números.
- **Divisão:** divisão de dois números, incluindo o tratamento de divisão por zero.

## 📚 Tecnologias Utilizadas

- **IDE:** VS Code
- **Linguagem:** JavaScript (Node.js)
- **Teste de Unidade:** Jest
- **Gerenciador de Pacotes:** npm
- **Ferramenta de Formatação:** Prettier

## ⚙️ Configuração do Ambiente

### Definir a versão do Node.js (caso necessário)
Certifique-se de que você está usando a versão correta do Node.js. Caso necessário, use o NVM para definir a versão:
```sh
nvm use 22.14.0
```

Alternativamente, crie um arquivo `.nvmrc` na raiz do projeto para especificar a versão do Node.js:
```sh
echo "22.14.0" > .nvmrc
```

### Instalar o Jest

Instale o Jest usando o comando:
```sh
npm i jest
```
**Observação:** Embora o comando acima instale o Jest como uma dependência regular, é uma boa prática usar `--save-dev` para pacotes de desenvolvimento como o Jest, pois isso os adiciona às `devDependencies` no `package.json`, indicando que são necessários apenas durante o desenvolvimento. No entanto, durante as aulas, o comando `npm i jest` foi utilizado pelo professor.

## 🧪 Executar os Testes
Para executar os testes unitários, você pode usar os seguintes comandos:

- **Execução Padrão:**
```sh
npx jest
```
- **Execução com Saída Detalhada (Verbose):**
```sh
npx jest --verbose
```
O comando `--verbose` fornece uma saída mais detalhada durante a execução dos testes, o que pode ser útil para depuração ou para entender melhor o fluxo dos testes.

## 🦸🏻‍♀️ Autor

<div align="center">
  <a href="https://github.com/janascher">
    <img src="https://avatars.githubusercontent.com/u/79182711?v=4" width="150px;" alt="Janaína Scher" style="border-radius: 50%; box-shadow: 0 0 10px rgba(0,0,0,0.2);">
    <br />
    <sub>
      <b>Janaína Scher</b> 👩🏻‍💻
    </sub>
    <br />
    <i>Profissional em Teste de Software e Garantia da Qualidade (QA)</i>
  </a>
</div>