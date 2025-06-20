const nomeBeneficiario = document.getElementById("nome-usuario")
let email = document.getElementById("email-usuario")
let senha = document.getElementById("senha-usuario")
const form = document.getElementById("form")
let erro = document.getElementById("mensagem-erro")
let erroCheck = document.getElementById("error-check")
const checkbox = document.getElementById('checkbox')

function validaNome(nomeCompleto) {
    const nomeComArray = nomeCompleto.trim().split(' ')
    return nomeComArray.length >= 2
}

form.addEventListener("submit", function(e) {
    e.preventDefault()

    let formEValido = validaNome(nomeBeneficiario.value)
    let checkMarcado = checkbox.checked

    if (!formEValido) {
        erro.innerHTML = `O seu nome está incompleto. Escreva também seu sobrenome!`
        erro.style.fontSize = '12px'
        erro.style.color = 'red'
        erro.style.textAlign = 'right'
        nomeBeneficiario.style.border = '2px solid red'
        return
    } else if (!checkMarcado) {
        erroCheck.innerHTML = `Você precisa aceitar os termos para continuar.`
        erroCheck.style.fontSize = '15px'
        erroCheck.style.color = '#e41414'
        erroCheck.style.textAlign = 'right'
        erroCheck.style.textShadow = '0px 0px 2px white'
        erro.style.fontSize = '12px'
        erro.style.color = '#e41414'
        erro.style.textAlign = 'right'
        checkbox.focus()
        return
    } else {
        erro.innerHTML = ''
        nomeBeneficiario.style.border = ''
        nomeBeneficiario = ''
        email = ''
        senha = ''
        alert('Login realizado com Sucesso')
        alert(`Seja bem-vindo, ${nomeBeneficiario.value}. Muito bom ter você aqui novamente!`)
    }
})