/*
    Algoritmo: Converter horas em minutos

Início
    Declare horas, minutos como números

    Escreva("Digite o total de horas: ")
    Leia horas

    minutos ← horas * 60

    Escreva("O total em minutos é: ", minutos)
Fim
*/

let horas = Number(prompt("Digite o total de horas: "));

let minutos = horas * 60;

document.write(`O total em minutos é: ${minutos}`);