const listaDeElementos = [1, 5, 7, 9, 3, "10", "11", "15"]

// ATIVIDADE 1
function retornaTodosElementos() {
    alert(listaDeElementos)
}

// ATIVIDADE 2
function retornaValorEpecifico(posicao) {
    console.log(`O valor contido nesta posição é: ${listaDeElementos[posicao]}`)
}

// ATIVIDADE 3
function retornarTipoElemento(posicao) {
    let elemento = listaDeElementos[posicao]

    if (typeof elemento === "string") {
        console.log(`O elemento ${elemento} é um elemento do tipo texto`)
    } else {
        console.log(`O elemento ${elemento} é um elemento do tipo número`)
    }
}

// ATIVIDADE 4
function removeUltimoElementoString() {
    if (typeof listaDeElementos[(listaDeElementos.length - 1)] === "string") {
        listaDeElementos.pop()
        console.log("Elemento deletado com sucesso")
    } else {
        console.log("Falha ao remover o elemento da lista")
    }
}

// ATIVIDADE 5
function consultaPosicao(valor) {
    let posicao = -4

    for (i = 0; i < listaDeElementos.length; i++) {
        if (valor === listaDeElementos[i]) {
            posicao = i;
            break;
        }
    }

    if (posicao !== -4) {
        console.log(`O valor procurado está na posição: ${posicao}`)
    } else {
        console.log("Valor não encontrado")
    }
}

// ATIVIDADE 6
function removerElementoEspecifico(value) {
    let indice = listaDeElementos.indexOf(value);
    let elemento = listaDeElementos[indice];

    if (value === elemento) {
        listaDeElementos.splice(indice, 1);
        console.log(`Elemento ${value} deletado com sucesso`)
    } else {
        console.log("Elemento não encontrado")
    }
}

// ATIVIDADE 7
function inserirNaPosicaoCorreta(valor){
    let final = listaDeElementos.length

    if (typeof valor === "number"){
        listaDeElementos.splice(0, 0, valor)
        return "Lista atualizada com sucesso"
    } else if (typeof valor === "string"){
        listaDeElementos.splice(final, 0, valor)
        return "Lista atualizada com sucesso"
    }
}

console.log('--------ATIVIDADE 1--------')
// retornaTodosElementos();

console.log('--------ATIVIDADE 2--------')
retornaValorEpecifico(1)

console.log('--------ATIVIDADE 3--------')
retornarTipoElemento(5)

console.log('--------ATIVIDADE 4--------')
removeUltimoElementoString()

console.log('--------ATIVIDADE 5--------')
consultaPosicao(5)

console.log('--------ATIVIDADE 6--------')
removerElementoEspecifico(3)

console.log('--------ATIVIDADE 7--------')
console.log(inserirNaPosicaoCorreta('20'))
