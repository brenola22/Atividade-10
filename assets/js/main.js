let nome = prompt("Digite seu nome: ")
let sobrenome = prompt("Digite seu sobrenome: ")
let data = new Date().toLocaleString("pt-BR", {dateStyle: "short", timeStyle: "short", hour12: false })
console.log(`Olá ${nome} ${sobrenome} hoje é ${data}. 67`)


setInterval(() => {
    let bemVindoElement = document.getElementById("bem-vindo")
    bemVindoElement.innerHTML = `Bem-vindo, ${nome} ${sobrenome}! Hoje é ${data}.`
}, 3*1000)

