let nome = prompt("Digite seu nome: ")
let sobrenome = prompt("Digite seu sobrenome: ")
let data = new Date().toLocaleString("pt-BR", { dateStyle: "full", timeStyle: "short" })
console.log(`Olá ${nome} ${sobrenome} hoje é ${data}. 67`)