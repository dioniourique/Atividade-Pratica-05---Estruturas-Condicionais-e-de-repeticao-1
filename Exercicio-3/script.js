//Exercicio 3

// Crie um algoritmo que leia o valor inicial da contagem, o valor final e
// o incremento, mostrando em seguida todos os valores no intervalo:
// Ex:
// Digite o primeiro Valor: 3
// Digite o último Valor: 10
// Digite o incremento: 2
// Contagem: 3 5 7 9 Acabou!

//PseudoCodigo

// INÍCIO
//   ESCREVA "Digite o primeiro Valor:"
//   LEIA valorInicial
//   ESCREVA "Digite o último Valor:"
//   LEIA valorFinal
//   ESCREVA "Digite o incremento:"
//   LEIA incremento

//   ESCREVA "Contagem:"
//   PARA i DE valorInicial ATÉ valorFinal COM PASSO incremento FAÇA
//     ESCREVA i
//   FIM PARA
//   ESCREVA "Acabou!"
// FIM


let valorInicial = prompt("Digite o primeiro Valor:");
let valorFinal = prompt("Digite o último Valor:");
let incremento = prompt("Digite o incremento:");

valorInicial = Number(valorInicial);
valorFinal = Number(valorFinal);
incremento = Number(incremento);

console.log("Contagem:");
for(let i = valorInicial; i <= valorFinal; i += incremento) {
    console.log(i);
}
console.log("Acabou!");
