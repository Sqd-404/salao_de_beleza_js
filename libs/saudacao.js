//importando modulo readline
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

/**
 * @author Wilson Rocha
 * @date 2023/10/26
 * @description Função que recebe os dados do cliente e retorna uma saudação
 */

const saudacao = () => {
    rl.question('Por favor, informe seu nome: ', (cliente) => {
        console.log(`Olá, ${cliente}, seja muito bem-vindo! Estamos ansiosos para lhe proporcionar um ótimo serviço.`);
        rl.close();
    });
}

module.exports = saudacao
