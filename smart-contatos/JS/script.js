const inputNome = document.getElementById("nome");
const inputEmail = document.getElementById("email");
const inputTel = document.getElementById("telefone");

function btnCadastrar(event) {

    console.log(inputNome.value, inputEmail.value, inputTel.value);
    event.preventDefault();

}
