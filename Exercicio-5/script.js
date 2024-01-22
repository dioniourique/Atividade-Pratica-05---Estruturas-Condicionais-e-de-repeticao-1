//Exercicio 5

// Faça um algoritmo que pergunte a distância que um passageiro
// deseja percorrer em Km. Calcule o preço da passagem, cobrando
// R$0.50 por Km para viagens até 200Km e R$0.45 para viagens mais
// longas.

//PseudoCodigo

// INÍCIO
//   DECLARE distancia
//   DECLARE preco

//   ESCREVA "Digite a distância que deseja percorrer em Km:"
//   LEIA distancia

//   SE (distancia <= 200) ENTÃO
//     preco = distancia * 0.50
//   SENÃO
//     preco = distancia * 0.45
//   FIM SE

//   ESCREVA "O preço da passagem é: R$" + preco com duas casas decimais
// FIM

let distancia = prompt("Digite a distância que deseja percorrer em Km:");
let preco;

if (distancia <= 200) {
    preco = distancia * 0.50;
} else {
    preco = distancia * 0.45;
}

alert("O preço da passagem é: R$" + preco.toFixed(2));

