const form = document.getElementById('form-deposito')

// Função para validar o nome e sobrenome usano o método split
function validaNome(nomeCompleto) {
    const nomeComoArray = nomeCompleto.split(' ')
    return nomeComoArray.length >= 2
}
// Adiciona um evento de escuta ao formulário para o evento de envio
form.addEventListener('submit', function(e) {
    // Variável para controlar se o formulário é válido
    // e.preventDefault() impede o envio do formulário automaticamente
    let formEValido = false
    e.preventDefault() // Impede o envio do formulário

    // Obtém os valores dos campos do formulário
    const nomeBeneficiario = document.getElementById('nome-beneficiario')
    const numeroContaBeneficiario = document.getElementById('numero-conta')
    const valorDeposito = document.getElementById('valor-deposito')

    // Mostra uma mensagem de sucesso com os valores inseridos
    const mensagemDeSucesso = `Montante de: ${valorDeposito.value}, depositado para o cliente: ${nomeBeneficiario.value}- Conta: ${numeroContaBeneficiario.value}.`

    // Valida o nome do beneficiário, usando a função validaNome e exibe uma mensagem de sucesso ou erro
    formEValido = validaNome(nomeBeneficiario.value)

    // Se o formulário for válido, exibe a mensagem de sucesso
    if (formEValido) {
        alert(mensagemDeSucesso)

        nomeBeneficiario.value = ''
        numeroContaBeneficiario.value = ''
        valorDeposito.value = ''
    } 
    
    // Se o formulário não for válido, exibe uma mensagem de erro
    else {
        alert('O nome não está completo. Por favor, insira o nome e sobrenome.')
    }
})

// Exibe os formulários no console
console.log(form)