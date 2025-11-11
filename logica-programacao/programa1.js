/*
    Vamos criar um programa, que o usuário executa uma função
    e dentro dessa função existe uma frase
    Pode pular linhas.
*/

function executarFrase(frase) {
    document.write(frase);
}

function pularLinha() {
    document.write("<br>");
}

executarFrase("São Paulo Campeão");
pularLinha();
pularLinha();
executarFrase("JavaScript com Lógica");
pularLinha();
pularLinha();
executarFrase("Olá Popetchô");