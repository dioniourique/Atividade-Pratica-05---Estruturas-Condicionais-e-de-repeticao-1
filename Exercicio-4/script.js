//Exercicio 4

// Numa promoção exclusiva para o Dia da Mulher, uma loja quer dar
// descontos para todos, mas especialmente para mulheres. Faça um
// programa que leia nome, sexo e o valor das compras do cliente e
// calcule o preço com desconto. Sabendo que:
// a. Homens ganham 5% de desconto

// b. Mulheres ganham 13% de desconto

//Pseudocodigo

// Solicite ao usuário para inserir seu nome e armazene na variável "nome"
// Solicite ao usuário para inserir seu sexo e armazene na variável "sexo"
// Solicite ao usuário para inserir o valor da compra e armazene na variável "valorDaCompra"

// Converta "sexo" para minúsculas

// Se "sexo" for igual a 'masculino', defina "desconto" como 0.05
// Senão, defina "desconto" como 0.13

// Calcule "valorComDesconto" como valorDaCompra * (1 - desconto)

// Exiba uma mensagem para o usuário com "Cliente: " + nome + ", Valor da compra com desconto: R$" + valorComDesconto



let nome = prompt("Por favor, insira seu nome:");
let sexo = prompt("Por favor, insira seu sexo (masculino/feminino):");
let valorDaCompra = prompt("Por favor, insira o valor da sua compra:");

sexo = sexo.toLowerCase();

let desconto = sexo === 'masculino' ? 0.05 : 0.13;
let valorComDesconto = valorDaCompra * (1 - desconto);

alert(`Cliente: ${nome}, Valor da compra com desconto: R$${valorComDesconto.toFixed(2)}`);
