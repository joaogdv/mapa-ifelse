var cor = prompt("Selecione uma cor (Vermelho, Azul, Verde ou Amarelo):")
var simbolo = prompt("Agora selecione um símbolo (x,$,* e #):")

if (cor === "Vermelho" && simbolo === "X") {
    alert("Cave um buraco no chão.");
}

else if (cor === "Azul" && simbolo === "$") {
    alert("Siga em frente")
}

else if (cor === "Verde" && simbolo === "*") {
    alert("Suba em uma árvore.")
}

else if (cor === "Amarelo" && simbolo === "#") {
    alert("Pare e descanse.");
}

else {
    console.log("Instrução desconhecida. Continue explorando.");
}