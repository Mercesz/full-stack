const form = document.querySelector("form");

const inputNome = document.getElementById("nome");
const inputEmail = document.getElementById("email");
const inputTel = document.getElementById("telefone");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    //Validação do formulário
    /*
        Se input for vazio, adicionar uma mensagem
    */

    if (inputNome.value == "" || inputEmail.value == "" || inputTel.value == "") {

        alert("Campos em brancos, por favor preencha os dados.");
        return false;  
    }

    console.log(inputNome.value, inputEmail.value, inputTel.value);
});

