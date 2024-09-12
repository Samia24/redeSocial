import { Usuario } from "./usuario";
import { Interacao } from "./interacao";
import { InteracaoExistente } from "./excecoes";


class Publicacao{
    private _usuario: Usuario;
    private _idPublicacao: number;
    private _conteudo: string;
    private _dataHora: Date = new Date();

    constructor(usuario: Usuario, idPublicacao: number, conteudo: string){
        this._usuario = usuario;
        this._idPublicacao = idPublicacao;
        this._conteudo = conteudo;
    }

    get toString(): string{
        return `\nUsuario: ${this.usuario.apelido} \nConteudo: ${this.conteudo} \nData: ${this.dataHora}`;
    }

    get idPublicacao(): number{
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

}


class PublicacaoAvancada extends Publicacao{
    private _interacoes: Interacao[];
    
    constructor(usuario: Usuario, idPublicacao: number, conteudo: string, dataHora: Date, interacoes: Interacao[]){
        super(usuario, idPublicacao, conteudo);
        this._interacoes = interacoes;
    }

    adicionarInteracao(interacao: Interacao): void{
        const interacoesUsuario = this._interacoes.filter((interacaoAtual) => interacaoAtual.usuario.idUsuario === interacao.usuario.idUsuario);

        if(interacoesUsuario.length !== 0){
            throw new InteracaoExistente("\nVocê já reagiu a essa publicacao !");
        }
        this.interacoes.push(interacao);
    }

    get toString(): string{
        return `\nUsuario: ${this.usuario.apelido} \nConteudo: ${this.conteudo} \nData: ${this.dataHora} \nQtd de reacoes: ${this.interacoes.length}`;
    }
    
    get interacoes(): Interacao[]{
        return this._interacoes;
    }

}

export { Publicacao, PublicacaoAvancada };
