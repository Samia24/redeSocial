import * as readlineSync from 'readline-sync';
import * as fs from 'fs';
import { RedeSocial } from './redeSocial';
import { AplicacaoError, InteracaoImpossibilitada, PublicacaoNaoAvancada, UsuarioInvalido } from './excecoes';
import { Usuario } from './usuario';
import { limparTela, listarPublicacoes, listarPublicacoesArquivadas, listarPublicacoesAtivas, listarUsuarios } from './methodsUtils';
import { Publicacao, PublicacaoAvancada } from './publicacao';
import { Interacao } from './interacao';

class AppRedeSocial{
    private _redeSocial: RedeSocial;
    private _input = readlineSync;

    constructor(){
        this._redeSocial = new RedeSocial();
    }

    menu() {

        let opcao: number = 0;
        do {
            limparTela();
            this.mostrarMenu();
            try {
                opcao = Number(this._input.question('>> Digite uma opção: '));

                switch (opcao) {
                    case 1:
                        limparTela();
                        this.cadastrarUsuario();
                        this.imprimirPressionarEnter();
                        limparTela();
                        break;
                    case 2:
                        limparTela();
                        listarUsuarios(this._redeSocial.usuarios);
                        this.imprimirPressionarEnter();
                        limparTela();
                        break;
                    case 3:
                        limparTela();
                        this.adicionarPublicacao();
                        this.imprimirPressionarEnter();
                        limparTela();
                        break;
                    case 4:
                        limparTela();
                        this.mostrarPublisUsuario();
                        this.imprimirPressionarEnter();
                        limparTela();
                        break;
                    case 5:
                        limparTela();
                        listarPublicacoes(this._redeSocial.publicacoes);
                        this.imprimirPressionarEnter();
                        limparTela();
                        break;
                    case 6:
                        limparTela();
                        this.mostrarPublisAtivasUsuario();
                        this.imprimirPressionarEnter();
                        limparTela();
                        break;
                    case 7:
                        limparTela();
                        this.mostrarPublisArquivadasUsuario();
                        this.imprimirPressionarEnter();
                        limparTela();
                        break;
                    case 8:
                        limparTela();
                        this.adicionarReacao();
                        this.imprimirPressionarEnter();
                        limparTela();
                        break;
                    case 9:
                        limparTela();
                        this.arquivarDesarquivarPubli();
                        this.imprimirPressionarEnter();
                        limparTela();
                        break;
                    case 10:
                        limparTela();
                        this.analiseDeEngajamento();
                        this.imprimirPressionarEnter();
                        limparTela();
                        break;
                    case 11:
                        limparTela();
                        this.editarPublicacao();
                        this.imprimirPressionarEnter();
                        limparTela();
                        break;
                    }
                }catch (e) {
                    console.log((<AplicacaoError>e).message);
                   // if (e instanceof AplicacaoError) {                       
                     //   console.log(e.message); // "Ocorreu um erro na aplicação!"
                    //} else {
                      //  console.log("Erro desconhecido. Contate o administrador", e);
                    //}
                    this.imprimirPressionarEnter();
                }
        } while (opcao != 0);
        limparTela();
        console.log('🔸🔸🔸🔸🔸🔸🔸🔸🔸🔸🔸🔸🔸🔸🔸🔸')
        console.log('Até logo 😘😘😘 \n⚠️  Encerrando a aplicacao 💣💣');
        console.log('🔸🔸🔸🔸🔸🔸🔸🔸🔸🔸🔸🔸🔸🔸🔸🔸')
    }

    private mostrarMenu() {
        console.log('\n🔻🔻🔻🔻🔻🔻🔻🔻🔻🔻🔻🔻🔻🔻🔻🔻🔻🔻\n' +
            '  🌟 BEM-VINDO(A) AO INSTAGRAM 🌟         \n' + 
            '🔺🔺🔺🔺🔺🔺🔺🔺🔺🔺🔺🔺🔺🔺🔺🔺🔺🔺\n' + 
            '\n  Por favor, escolha uma opcao abaixo:\n' +
            '-------------------------------------\n');
        console.log('1️⃣ - Cadastrar novo usuario\n' + 
            '2️⃣  - Listar usuarios\n' + 
            '3️⃣  - Adicionar nova publicacao\n' + 
            '4️⃣  - Listar publicacoes por usuario\n' + 
            '5️⃣  - Ver todas as publicacoes\n' + 
            '6️⃣  - Listar publicacoes ativas\n' +
            '7️⃣  - Listar publicacoes arquivadas\n' +
            '8️⃣  - Adicionar reacao\n' + 
            '9️⃣  - Arquivar/Ocultar publicacao\n' +
            '🔟  - Analisar engajamento\n' +
            '1️⃣ 1️⃣ - Editar publicacao\n' +
            '0️⃣  - Sair\n');
        console.log("=====================================\n");
    }

    private imprimirPressionarEnter() {
        this._input.question("\nPressione <enter> p/ continuar ..");
    }

    private cadastrarUsuario(){
        console.log('\n--------------------------------');
        console.log('>> CADASTRO DE USUÁRIOS 💻 <<');
        console.log('--------------------------------');
        
        let email = this._input.question('Informe seu e-mail: ');
        let apelido = this._input.question('Informe seu apelido: ');
        let cpf = this._input.question('Informe seu CPF (ex: 22222222222): ');

        let novoUsuario = new Usuario(email, apelido, cpf);

        this._redeSocial.incluirUsuario(novoUsuario);
        console.log(`\n> Usuario cadastrado com sucesso!\n`);
    }

    private editarPublicacao() {
        console.log('\n--------------------------------');
        console.log('>> EDITAR PUBLICACAO 📝 <<');
        console.log('--------------------------------');
        let idPublicacao = Number(this._input.question('\nInforme o ID da publicacao que deseja editar: '));
        let novoConteudo = this._input.question('Informe o novo conteudo da publicacao: ');

        this._redeSocial.editarPublicacao(idPublicacao, novoConteudo);
        console.log('\n> Publicacao atualizada com sucesso!');
    }

    private adicionarPublicacao() {
        console.log('\n--------------------------------');
        console.log('>> Incluir PUBLICACAO 📸 <<');
        console.log('--------------------------------');
        let idUsuario = Number(this._input.question('Informe o ID do usuario ao qual deseja publicar: '));
        let usuario = this._redeSocial.consultarUsuarioId(idUsuario);
        
        let conteudo = this._input.question('Digite o conteudo da publicacao: ');
        let ehAvancada = this._input.question('Voce deseja habilitar reacoes na publicacao (sim -> s / nao -> qualquer tecla + enter): ').toLowerCase();

        let novaPubli: Publicacao;

        if(ehAvancada === 's' ){
            novaPubli = new PublicacaoAvancada(usuario, conteudo);
        }else{
            novaPubli = new Publicacao(usuario, conteudo);
        }      

        this._redeSocial.incluirPubli(novaPubli);
        console.log('\n> Publicacao adicionada com sucesso !');
    }
    
    private adicionarReacao():void {
        console.log('\n--------------------------------');
        console.log('>> Adicionar REACAO ❤️💔😂🫢 <<');
        console.log('--------------------------------');
        let idPubli = Number(this._input.question('Informe o ID da publicacao ao qual deseja reagir: '));
        let publi = this._redeSocial.consultarPubli(idPubli);
        if (!(publi instanceof PublicacaoAvancada)) {
            throw new InteracaoImpossibilitada('\nReação só é possível em publicações avançadas!');
        }
        let idUsuario = Number(this._input.question('Informe seu ID para reagir: '));
        let usuario = this._redeSocial.consultarUsuarioId(idUsuario);
     
        let tipoReacao = Number(this._input.question('Informe o tipo de reacao à publi: \n' +
            `Publi: "${publi.conteudo}"\n` +
            '1 - Curtir\n' +
            '2 - Descurtir\n' +
            '3 - Rir\n' +
            '4 - Surpresa\n' +
            '\n>> Opcao: '));

        
        this._redeSocial.reagir(usuario, publi, tipoReacao);
        console.log('\n> Interacao adicionada com sucesso !');
    }
    
    private arquivarDesarquivarPubli(): void {
        console.log('\n--------------------------------');
        console.log('>> Arquivar/Desarquivar Publi ✅❎ <<');
        console.log('--------------------------------');
        let idPubli = Number(this._input.question('Informe o ID da publicacao ao qual deseja alterar o estado: '));
        let publi = this._redeSocial.consultarPubli(idPubli);
        
        if(publi.estadoAtual === true){
            console.log('\n> Publicacao ATIVA !')
        }else{
            console.log('\n> Publicacao ARQUIVADA/OCULTA !')
        }

        let novoEstado = Number(this._input.question('\n> Informe o novo estado da sua publicacao? (Ativar -> 1 / Arquivar -> 0): '));

        this._redeSocial.alterarEstado(Boolean(novoEstado), publi);
    }
    
    private analiseDeEngajamento(): void {
        console.log('\n--------------------------------');
        console.log('>> Análise de Engajamento 📊 <<');
        console.log('--------------❤️💔😂🫢--------------');
        let idPubli = Number(this._input.question('Informe o ID da publicacao que deseja analisar: '));
        let publi = this._redeSocial.consultarPubli(idPubli);
        
        if(!(publi instanceof PublicacaoAvancada)){
            throw new PublicacaoNaoAvancada('\nPublicacao nao Avancada, nao ha interacoes !!');
        }

        console.log(publi.analisarEngajamento());
    }

    private mostrarPublisUsuario(): void{
        let idUsuario = Number(this._input.question('Informe o ID do usuario que deseja exibir publicacoes: '));
        let usuario = this._redeSocial.consultarUsuarioId(idUsuario);

        this._redeSocial.exibirTodasPublicacoesUsuario(usuario);
        
    }
    private mostrarPublisAtivasUsuario(): void{
        let idUsuario = Number(this._input.question('Informe o ID do usuario que deseja exibir publicacoes: '));
        let usuario = this._redeSocial.consultarUsuarioId(idUsuario);

        this._redeSocial.exibirAtivasPublicacoesUsuario(usuario);
        
    }
    private mostrarPublisArquivadasUsuario(): void{
        let idUsuario = Number(this._input.question('Informe o ID do usuario que deseja exibir publicacoes: '));
        let usuario = this._redeSocial.consultarUsuarioId(idUsuario);

        this._redeSocial.exibirArquivadasPublicacoesUsuario(usuario);
        
    }


}

export { AppRedeSocial };