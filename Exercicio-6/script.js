//Exercicio 6

// Faça um programa que leia a largura e o comprimento de um
// terreno retangular, calculando e mostrando a sua área em m2. O
// programa também deve mostrar a classificação desse terreno, de
// acordo com a lista abaixo:
// Abaixo de 100m2 = TERRENO POPULAR
// Entre 100m2 e 500m2 = TERRENO MASTER
// Acima de 500m2 = TERRENO VIP

//PseudoCodigo

// Início
//   Leia largura
//   Leia comprimento
//   área = largura * comprimento

//   Se área < 100 Então
//     Escreva "TERRENO POPULAR"
//   Senão Se área <= 500 Então
//     Escreva "TERRENO MASTER"
//   Senão
//     Escreva "TERRENO VIP"
//   Fim Se
// Fim


let largura = prompt("Digite a largura do terreno");
let comprimento = prompt("Digite o comprimento do terreno");
let area = largura * comprimento;

if (area < 100) {
    alert("TERRENO POPULAR");
} else if (area <= 500) {
    alert("TERRENO MASTER");
} else {
    alert("TERRENO VIP");
}
