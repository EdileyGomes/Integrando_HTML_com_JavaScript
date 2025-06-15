let beneficiario = document.getElementById("nome-beneficiario");
let conta = document.getElementById("numero-conta");
let vDeposito = document.getElementById("valor-deposito");
let descricao = document.getElementById("descricao");

if (beneficiario && conta && vDeposito == true) {
    beneficiario.addEventListener("input", function() {
        if (beneficiario.value.length <= 2) {
            beneficiario.setCustomValidity("O nome do beneficiário deve ter pelo menos 3 caracteres.");
        } else {
            beneficiario.length(" ");
        }
    }
    );
    conta.addEventListener("input", function() {
        if (conta.value.length < 5) {
            conta.setCustomValidity("O número da conta deve ter pelo menos 5 caracteres.");
        } else {
            conta.setCustomValidity("");
        }
    }); 
    vDeposito.addEventListener("input", function() {
        if (vDeposito.value <= 0) {
            vDeposito.setCustomValidity("O valor do depósito deve ser maior que zero.");
        } else {
            vDeposito.setCustomValidity("");
        }
    });
}
