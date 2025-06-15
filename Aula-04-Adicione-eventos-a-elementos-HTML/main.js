const form = document.getElementById('form-deposito')

function validaNome(nomeCompleto) {
    const nomeComoArray = nomeCompleto.split(' ')
    return nomeComoArray.length >= 2
}

form.addEventListener('submit', function(e) {
    let formEValido = false
    e.preventDefault() // Impede o envio do formulário

    const nomeBeneficiario = document.getElementById('nome-beneficiario')
    const numeroContaBeneficiario = document.getElementById('numero-conta')
    const valorDeposito = document.getElementById('valor-deposito')
    const mensagemDeSucesso = `Montante de: ${valorDeposito.value}, depositado para o cliente: ${nomeBeneficiario.value}- Conta: ${numeroContaBeneficiario.value}.`

    formEValido = validaNome(nomeBeneficiario.value)
    if (formEValido) {
        alert(mensagemDeSucesso)

        nomeBeneficiario.value = ''
        numeroContaBeneficiario.value = ''
        valorDeposito.value = ''
    } else {
        alert('O nome não está completo. Por favor, insira o nome e sobrenome.')
    }
})

console.log(form)