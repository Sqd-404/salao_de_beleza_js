/**
 * @author Victor Hugo
 * @date 2023/10/26
 * @description função responsável por definir o procedimento a ser feito
 */

const readlineSync = require('readline-sync');

let procedimentosRealizados = [];
let valorTotal = 0;

function procedimento() {
    let escolhaDeProcedimento = readlineSync.question('Escolha um dos procedimentos a ser feito (corte, escova ou barba): ');

    const valorDoCorte = 30;
    const valorDaEscova = 90;
    const valorDaBarba = 20;

    if (procedimentosRealizados.includes(escolhaDeProcedimento)) {
        console.log(`Você já realizou este procedimento: ${escolhaDeProcedimento}`);
    } else {
        switch (escolhaDeProcedimento) {
            case 'corte':
                console.log(`Você escolheu corte de cabelo, o valor é R$${valorDoCorte}.`);
                procedimentosRealizados.push(escolhaDeProcedimento);
                valorTotal += valorDoCorte;
                break;
            case 'escova':
                console.log(`Você escolheu escova, o valor é R$${valorDaEscova}.`);
                procedimentosRealizados.push(escolhaDeProcedimento);
                valorTotal += valorDaEscova;
                break;
            case 'barba':
                console.log(`Você escolheu fazer a barba, o valor é R$${valorDaBarba}.`);
                procedimentosRealizados.push(escolhaDeProcedimento);
                valorTotal += valorDaBarba;
                break;
            default:
                console.log('Opção inválida.');
        }
    }

    const realizarOutroProcedimento = readlineSync.keyInYNStrict('Deseja realizar mais algum procedimento? ');

    if (realizarOutroProcedimento) {
        procedimento();
    } else {
        console.log(`Procedimentos realizados: ${procedimentosRealizados.join(', ')}`);
        console.log(`Valor total gasto: R$${valorTotal}`);
    }
}

procedimento();
