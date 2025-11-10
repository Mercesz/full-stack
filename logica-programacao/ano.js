// Criar um programa, para verifcar o ano de nascimento
const anoAtual = 2025;

/* Pegar o ano atual e subtrair pela idade*/
const nome = prompt("Digite o seu nome: ")
const idade = Number(prompt("Digite sua idade: "))

console.log(anoAtual - idade)

document.write(`Olá ${"<strong>"} ${nome} ${"</strong>"} , seja bem-vindo! Você nasceu no ano de: ${"<strong>"} ${anoAtual - idade} ${"</strong>"} sua idade é ${idade}`)


// Diego, 35 anos
// Juliana, 10 anos
//João, 17 anos