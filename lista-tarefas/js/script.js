//Função em JavaScript
function adicionar() {

    //Variáveis
    let tarefa = document.getElementById("tarefas")
    let lista = document.getElementById("lista")

    let item = document.createElement("li")
    item.textContent = tarefa.value

    lista.appendChild(item)

    tarefa.value = ""
}
