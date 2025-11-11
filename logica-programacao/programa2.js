/*
    Início
    Declare numero como número

    Função MostraDobro(valor)
        Escreva("O dobro de ", valor, " é ", valor * 2)
    FimFunção

    Escreva("Digite um número: ")
    Leia numero

    Chame MostraDobro(numero)
Fim
*/

function MostraDobro(valor) {
    document.write("O dobro de ", valor, " é ", valor * 2);
}

let num = Number(prompt("Digite um número: "));

MostraDobro(num);