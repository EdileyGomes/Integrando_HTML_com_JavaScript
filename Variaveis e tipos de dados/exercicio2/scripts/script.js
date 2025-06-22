const reais = Number(prompt('Digite o valor que deseja converter em R$: '))
const dolar = Number(prompt('Agora digite o valor do dolar atualmente: '))

const calculo = reais / dolar 

alert(`R$ ${reais.toFixed(2)} equivalem a US$ ${calculo.toFixed(2)}.`)