import { Usuario } from "./usuario";
import { Interacao, TipoInteracao } from "./interacao";
import { InteracaoExistente } from "./excecoes";


class Publicacao{
    private _usuario: Usuario;
    private static _contadorId: number = 1;
    private _idPublicacao: number;
    private _conteudo: string;
    private _dataHora: Date = new Date();
    private _estadoAtual: boolean = true;

    constructor(usuario: Usuario, conteudo: string){
        this._usuario = usuario;
        this._idPublicacao = Publicacao._contadorId++;
        this._conteudo = conteudo;
    }
    

    get toString(): string{
        return `\n>> Listando Publicacoes Simples 📋 << \n----------------------- \n👤 Usuario: ${this.usuario.apelido} \n🆔 ID Publicacao: ${this._idPublicacao} \n📝 Conteudo: ${this.conteudo} \n🗓️ Data: ${this.dataHora} \n-----------------------`;
    }

    get idPublicacao(): number{
        return this._idPublicacao;
    }

    get conteudo(): string{
        return this._conteudo;
    }

    set setConteudo(novoConteudo: string) {
        this._conteudo = novoConteudo;
    }

    get dataHora(): Date{
        return this._dataHora;
    }

    get usuario(): Usuario{
        return this._usuario;
    }

    get estadoAtual(): boolean{
        return this._estadoAtual;
    }
    
    set setEstadoAtual(novoEstado: boolean){
        this._estadoAtual = novoEstado;
    }

}


class PublicacaoAvancada extends Publicacao{
    private _interacoes: Interacao[];
    
    constructor(usuario: Usuario, conteudo: string){
        super(usuario, conteudo);
        this._interacoes = [];
    }

    adicionarInteracao(interacao: Interacao): void{
        const interacoesUsuario = this._interacoes.filter((interacaoAtual) => interacaoAtual.usuario.idUsuario === interacao.usuario.idUsuario);

        if(interacoesUsuario.length !== 0){
            throw new InteracaoExistente("\nVocê já reagiu a essa publicacao !");
        }
        this.interacoes.push(interacao);
    }

    analisarEngajamento(): string{
        let totalInteracoes = this.interacoes.length;
        let reacoes = this.interacoes.map((interacao) => interacao.tipoInteracao);
        let tipoReacoes = reacoes.filter((interacao, indice, vetor) => vetor.indexOf(interacao) === indice);
        let qtdPorTipo = tipoReacoes.map((tipoReacao) => reacoes.filter((reacao) => reacao === tipoReacao).length);

        return `\n📊 Total de Interacoes: ${totalInteracoes}
            ${tipoReacoes.map((tipoReacao, indice) => `\n> ${TipoInteracao[tipoReacao]}: ${qtdPorTipo[indice]}`)}`
    }

    get toString(): string{
        return `\n>> Listando Publicacoes Avancadas 📋 << \n----------------------- \n👤 Usuario: ${this.usuario.apelido}\n🆔 ID Publicacao: ${this.idPublicacao} \n📝 Conteudo: ${this.conteudo} \n🗓️ Data: ${this.dataHora} \n📈 Qtd de reacoes: ${this.interacoes.length} \n-----------------------`;
    }
    
    get interacoes(): Interacao[]{
        return this._interacoes;
    }

}

export { Publicacao, PublicacaoAvancada };
