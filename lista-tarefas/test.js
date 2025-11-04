

function Soma(n1, n2) {
    let Soma = n1 + n2
    console.log(`${n1} + ${n2} = ${Soma}`)
}

function Tabuada(x) {
    for (let i = 0; i < 1;) {
        for (let index = 0; index < 11; index++) {
            let mult = x * index
            console.log(`${x} * ${index} = ${mult}`)
        }
        i++

    }
}

//Soma(20, 40)
Tabuada(2)