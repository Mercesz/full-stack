// Chamando a tag FORM
const form = document.querySelector("form");

//Chamando a classe lista do HTML
const lista = document.querySelector(".lista");
const listaMsg = document.querySelector(".lista-msg");

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

    //Condição para retirar a li > .lista-msg
    //se listaMsg === true
    if (listaMsg) {
        listaMsg.remove();
    }

    //Criando botão Excluir
    const btnExcluir = document.createElement("button");
    btnExcluir.textContent = "Excluir";
    btnExcluir.className = "btn-delete"

    //Criando LI
    const li = document.createElement("li");


    //Criando uma função para excluir
    btnExcluir.addEventListener("click", function () {
        li.remove();
    });

    li.innerHTML = `
        <span class="contato-nome">🧑🏻‍💻Nome: ${inputNome.value}</span>
        <span class="contato-email">📩Email: ${inputEmail.value}</span>
        <span class="contato-telefone">☎️Telefone: ${inputTel.value}</span>
    `;

    // enviando os dados da lista appendChild
    lista.appendChild(li);
    li.appendChild(btnExcluir);

    //Resetando os valores dos inputs
    form.reset();

});

