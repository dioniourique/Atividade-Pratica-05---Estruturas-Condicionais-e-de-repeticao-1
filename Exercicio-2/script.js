//Exercicio 2

// Desenvolva um aplicativo que leia o salário e o sexo de vários
// funcionários. No final, mostre o total de salários pagos aos homens e
// o total pago às mulheres. O programa vai perguntar ao usuário se
// ele quer continuar ou não sempre que ler os dados de um
// funcionário.

//Pseudocodigo

// INICIO
//   DECLARE totalSalarioHomens COMO NÚMERO = 0
//   DECLARE totalSalarioMulheres COMO NÚMERO = 0
//   DECLARE continuar COMO BOOLEANO = VERDADEIRO

//   ENQUANTO continuar FAÇA
//     DECLARE salario COMO NÚMERO = LEIA("Digite o salário do funcionário:")
//     DECLARE sexo COMO STRING = LEIA("Digite o sexo do funcionário (M para masculino, F para feminino):")

//     SE sexo == "M" ENTÃO
//       totalSalarioHomens = totalSalarioHomens + salario
//     SENÃO SE sexo == "F" ENTÃO
//       totalSalarioMulheres = totalSalarioMulheres + salario
//     FIM SE

//     DECLARE resposta COMO STRING = LEIA("Deseja continuar? (S para sim, N para não)")
//     continuar = resposta == "S"
//   FIM ENQUANTO

//   ESCREVA("Total de salários pagos aos homens: " + totalSalarioHomens)
//   ESCREVA("Total de salários pagos às mulheres: " + totalSalarioMulheres)
// FIM


let totalSalarioHomens = 0;
let totalSalarioMulheres = 0;
let continuar = true;

while (continuar) {
    let salario = parseFloat(prompt("Digite o salário do funcionário:"));
    let sexo = prompt("Digite o sexo do funcionário (M para masculino, F para feminino):");

    if (sexo.toUpperCase() === "M") {
        totalSalarioHomens += salario;
    } else if (sexo.toUpperCase() === "F") {
        totalSalarioMulheres += salario;
    }

    let resposta = prompt("Deseja continuar? (S para sim, N para não)");
    continuar = resposta.toUpperCase() === "S";
}

console.log("Total de salários pagos aos homens: " + totalSalarioHomens);
console.log("Total de salários pagos às mulheres: " + totalSalarioMulheres);
