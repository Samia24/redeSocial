import * as readlineSync from 'readline-sync';
import * as fs from 'fs';
import { RedeSocial } from './redeSocial';
import { AplicacaoError } from './excecoes';
import { Usuario } from './usuario';
import { listarUsuarios } from './methodsUtils';

class AppRedeSocial{
    private _redeSocial: RedeSocial;
    private _input = readlineSync;

    constructor(){
        this._redeSocial = new RedeSocial();
    }

    menu() {

        let opcao: number = 0;
        do {
            this.mostrarMenu();
            try {
                opcao = Number(this._input.question('>> Digite uma opção: '));

                switch (opcao) {
                    case 1:
                        this.cadastrarUsuario();
                        this.imprimirPressionarEnter();
                        break;

                    case 2:
                        listarUsuarios(this._redeSocial.usuarios);
                        break;
                    case 3:
                        
                        break;
                    case 4:
                        
                        break;
                    case 5:
                        
                        break;
                    }
                }catch (e) {
                    if (e instanceof AplicacaoError) {
                        console.log(e.message); // "Ocorreu um erro na aplicação!"
                    } else {
                        console.log("Erro desconhecido. Contate o administrador", e);
                    }
                    this.imprimirPressionarEnter();
                }
        } while (opcao != 0);
    }

    private mostrarMenu() {
        console.log('\n=====================================\n' +
            '         🌟 BEM-VINDO(A) 🌟         \n' + 
            '=====================================\n' + 
            '  Por favor, escolha uma opção abaixo:\n' +
            '-------------------------------------\n');
        console.log('1️⃣  - Cadastrar novo usuario\n' + 
            '2️⃣  - Listar usuarios\n' + 
            '3️⃣  - Adicionar nova publicacao\n' + 
            '4️⃣  - Ver todas as publicacoes\n' + 
            '5️⃣  - Adicionar interacao\n' + 
            '6️⃣  - ...\n' +
            '0️⃣  - Sair\n');
        console.log("=====================================\n");
    }

    private imprimirPressionarEnter() {
        this._input.question("Pressione <enter> p/ continuar ..");
    }

    private cadastrarUsuario(){
        console.log('\n--------------------------------');
        console.log('>> CADASTRO DE USUÁRIOS 💻 <<');
        console.log('--------------------------------');
        let id = this._input.question('Informe o ID do usuario: ');
        let email = this._input.question('Informe seu e-mail: ');
        let apelido = this._input.question('Informe seu apelido: ');
        let cpf = this._input.question('Informe seu CPF (ex: 22222222222): ');

        let novoUsuario = new Usuario(id, email, apelido, cpf);

        this._redeSocial.incluirUsuario(novoUsuario);
        console.log(`Usuário cadastrado com sucesso!`);
    }

}

export { AppRedeSocial };