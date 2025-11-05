function Chama() {
    let n1 = parseInt(prompt("Por favor digite um número: "))
    let n2 = parseInt(prompt("Por favor digite outro: "))

    console.log(`A soma dos números ${n1} + ${n2} são: ${n1 + n2}`)
}

function Soma(n1, n2) {
    let Soma = n1 + n2
    console.log(`${n1} + ${n2} = ${Soma}`)
}

function Sub(n1, n2) {
    let Sub = n1 - n2
    console.log(`${n1} - ${n2} = ${Sub}`)
}

function Tabuada(x) {
    for (let i = 0; i < 1;) {
        for (let index = 1; index < 11; index++) {
            let mult = x * index
            console.log(`${x} * ${index} = ${mult}`)
        }
        i++

    }
}

//Soma(20, 40)

Tabuada(7)