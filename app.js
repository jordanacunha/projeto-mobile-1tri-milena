const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
}); 


let login = '';
let senha = '';

function menu() {
    console.log("=== Menu ===");
    console.log("1| Cadastrar");
    console.log("2| login");
    console.log("3| Sair");


rl.question('opção: ', (option) => {
    switch (option) {
        case '1':
            console.log("Cadastrar selecionado");
            rl.question('Digite seu login: ', (inputLogin) => {
                login = inputLogin;
                
                rl.question('Digite sua senha: ', (inputSenha) => {
                    senha = inputSenha;
                    console.log(`Login: ${login}, Senha: ${senha}`);            
                });
            });
                rl.close();
            break;
        case '2':
            console.log("Cadastrar selecionado");
            break;
        case '3':
            console.log("Sair selecionado");
            break;
        default:
            console.log("Opção inválida");
    }
});
}

menu();