import { Usuario } from "./usuario";
import { Interacao, TipoInteracao } from "./interacao";
import { InteracaoExistente } from "./excecoes";


class Publicacao{
    private _usuario: Usuario;
    private _idPublicacao: string;
    private _conteudo: string;
    private _dataHora: Date = new Date();
    private _estadoAtual: boolean = true;

    constructor(usuario: Usuario, conteudo: string){
        this._usuario = usuario;
        this._idPublicacao = Math.random().toString(36).substring(2, 9);
        this._conteudo = conteudo;
    }
    

    get toString(): string{
        return `\nUsuario: ${this.usuario.apelido} \nConteudo: ${this.conteudo} \nData: ${this.dataHora}`;
    }

    get idPublicacao(): string{
        return this._idPublicacao;
    }

    get conteudo(): string{
        return this._conteudo;
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
    
    constructor(usuario: Usuario, conteudo: string, estadoAtual: boolean, dataHora: Date, interacoes: Interacao[]){
        super(usuario, conteudo);
        this._interacoes = interacoes;
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

        return ` >> Análise do Engajamento <<
            Total de Interacoes: ${totalInteracoes}
            ${tipoReacoes.map((tipoReacao, indice) => `${tipoReacao}: ${qtdPorTipo[indice]}\n`)}`
    }

    get toString(): string{
        return `\nUsuario: ${this.usuario.apelido} \nConteudo: ${this.conteudo} \nData: ${this.dataHora} \nQtd de reacoes: ${this.interacoes.length}`;
    }
    
    get interacoes(): Interacao[]{
        return this._interacoes;
    }

}

export { Publicacao, PublicacaoAvancada };
