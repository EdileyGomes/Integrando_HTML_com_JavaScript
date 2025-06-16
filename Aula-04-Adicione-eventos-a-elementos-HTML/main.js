const form = document.getElementById('form-deposito')
const nomeBeneficiario = document.getElementById('nome-beneficiario')
let formEValido = false

// Função para validar o nome e sobrenome usano o método split
function validaNome(nomeCompleto) {
    const nomeComoArray = nomeCompleto.split(' ')
    return nomeComoArray.length >= 2
}
// Adiciona um evento de escuta ao formulário para o evento de envio
form.addEventListener('submit', function(e) {
    // Variável para controlar se o formulário é válido
    // e.preventDefault() impede o envio do formulário automaticamente
    e.preventDefault() // Impede o envio do formulário

    // Obtém os valores dos campos do formulário
    const numeroContaBeneficiario = document.getElementById('numero-conta')
    const valorDeposito = document.getElementById('valor-deposito')

    // Mostra uma mensagem de sucesso com os valores inseridos
    const mensagemDeSucesso = `Montante de: <b>${valorDeposito.value}</b>, depositado para o cliente: <b>${nomeBeneficiario.value}</b> - Conta: <b>${numeroContaBeneficiario.value}</b>.`

    // Valida o nome do beneficiário, usando a função validaNome e exibe uma mensagem de sucesso ou erro
    formEValido = validaNome(nomeBeneficiario.value)

    // Se o formulário for válido, exibe a mensagem de sucesso
    if (formEValido) {
        let mensagem = document.querySelector('.sucess-mansage')
        mensagem.innerHTML = mensagemDeSucesso
        mensagem.style.display = 'block'

        nomeBeneficiario.value = ''
        numeroContaBeneficiario.value = ''
        valorDeposito.value = ''
    } 
    // Se o formulário não for válido, exibe uma mensagem de erro
    else {
        nomeBeneficiario.style.border = '1px red solid'
        document.querySelector('.error-message').style.display = 'block'
    }
})

nomeBeneficiario.addEventListener('keyup', function(e) {
    console.log(e.target.value)

    if (!validaNome) {
        nomeBeneficiario.classList.add('error')
        //nomeBeneficiario.style.border = '1px red solid'
        document.querySelector('.error-message').style.display = 'block'
    } else {
        nomeBeneficiario.classList.remove('error')
        document.querySelector('.error-message').style.display = 'none'
    }
})

document