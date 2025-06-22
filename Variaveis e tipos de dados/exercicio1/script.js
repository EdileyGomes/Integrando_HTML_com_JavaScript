const nome = prompt('Digite seu Nome: ')
const peso = Number(prompt('Digite seu Peso em KG: '))
const altura = Number(prompt('Digite sua altura em metros: '))

const imc = peso / (altura * altura)

alert(`${nome}, seu IMC é de ${imc.toFixed(2)}`)