//Exercicio 1

// Faça um algoritmo que leia a idade de vários alunos de uma turma.
// O programa vai parar quando for digitada a idade 999. No final,
// mostre quantos alunos existem na turma e qual é a média de idade
// do grupo.

// PseudoCodigo

// Iniciar
//   Definir totalIdade = 0
//   Definir totalAlunos = 0

//   Enquanto verdadeiro
//     Definir idade = Entrada do usuário ("Digite a idade do aluno:")

//     Se idade == 999
//       Sair do loop

//     Adicionar idade ao totalIdade
//     Incrementar totalAlunos
//   Fim Enquanto

//   Se totalAlunos > 0
//     Definir mediaIdade = totalIdade / totalAlunos
//     Exibir "Existem " + totalAlunos + " alunos na turma."
//     Exibir "A média de idade do grupo é " + mediaIdade + "."
//   Senão
//     Exibir "Nenhum aluno foi inserido."
//   Fim Se
// Fim


let totalIdade = 0;
let totalAlunos = 0;

while (true) {
    let idade = Number(prompt("Digite a idade do aluno:"));

    if (idade === 999) {
        break;
    }

    totalIdade += idade;
    totalAlunos++;
}

if (totalAlunos > 0) {
    let mediaIdade = totalIdade / totalAlunos;
    console.log(`Existem ${totalAlunos} alunos na turma.`);
    console.log(`A média de idade do grupo é ${mediaIdade}.`);
} else {
    console.log("Nenhum aluno foi inserido.");
}
