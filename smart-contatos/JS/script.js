// Chamando a tag FORM
const form = document.querySelector("form");

//Chamando a classe lista do HTML
const lista = document.querySelector(".lista");

const inputNome = document.getElementById("nome");
const inputEmail = document.getElementById("email");
const inputTel = document.getElementById("telefone");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    //Validação do formulário
    if (inputNome.value == "" || inputEmail.value == "" || inputTel.value == "") {
        alert("Campos em brancos, por favor preencha os dados.");
        return false;
    }

    //Criando LI
    const li = document.createElement("li");

    li.innerHTML = `
        <span class="contato-nome">Nome: ${inputNome.value}</span>
        <span class="contato-email">Email: ${inputEmail.value}</span>
        <span class="contato-telefone">Telefone: ${inputTel.value}</span>
    `;

    // enviando os dados da lista appendChild
    lista.appendChild(li);


    //Resetando os valores dos inputs
    form.reset();

});

