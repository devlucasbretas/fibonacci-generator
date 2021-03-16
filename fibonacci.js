


const button = document.getElementById("btnGen")
const display = document.getElementById("saida")
const qtde = document.getElementById("numberQt")
const newSeq = document.getElementById("newSequence")


button.addEventListener("click", function(){
    let antigo = 0
    let atual  = 1
    let resultado = 0

    for (let i = 0; i < qtde.value; i++) {
        resultado = antigo + atual
        antigo = atual
        atual = resultado
        display.style.display = "block"
        display.innerHTML += `${resultado}<span id="virgula">, </span>`
    }
})

newSeq.addEventListener("click", function(){
    display.style.display = "none"
    display.innerHTML = ""
    qtde.value = ""
})






