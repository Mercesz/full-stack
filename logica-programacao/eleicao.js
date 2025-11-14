/*
    Algoritmo: Anos de Eleições

Início
    Declare anoInicio, anoAtual como números
    anoAtual ← 2025

    Escreva("Digite o ano da primeira eleição que você acompanhou:")
    Leia anoInicio

    Enquanto anoInicio ≤ anoAtual faça
        Escreva("Ano de eleição: ", anoInicio)
        anoInicio ← anoInicio + 2
    FimEnquanto
Fim
*/

let anoInicio = Number(prompt("Digite o ano da primeira eleição que você acompanhou: "));

//Chamando o data atual e 'formatando' para pegar apenas o ano
const anoAtual = new Date().getFullYear();

while (anoInicio <= anoAtual) {
    let tipoAno = (anoInicio % 2 === 0) ? 'Ano Par' : "Ano Impar";
    console.log(`Ano de eleição: ${anoInicio} \n${tipoAno}`);
    anoInicio += 2;
}

