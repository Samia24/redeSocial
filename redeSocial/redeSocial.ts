class Usuario{
    private _idUsuario: number;
    private _email: string;
    private _apelido: string;
    private _documentoCPF: number;

    constructor(idUsuario: number, email: string, apelido: string, documentoCPF: number){
        this._idUsuario = idUsuario;
        this._email = email;
        this._apelido = apelido;
        this._documentoCPF = documentoCPF;
    }

    get idUsuario(): number{
        return this._idUsuario;
    }

    get email(): string{
        return this._email;
    }

    get apelido(): string{
        return this._apelido;
    }

    get documentoCPF(): number{
        return this._documentoCPF;
    }
}

class Publicacao extends Usuario{
    private _idPubli: number;
    private _conteudo: string;
    private _dataHora: Date;

    constructor(idUsuario: number, email: string, apelido: string, documentoCPF: number, idPubli: number, conteudo: string, dataHora: Date){
        super(idUsuario, email, apelido, documentoCPF);
        this._idPubli = idPubli;
        this._conteudo = conteudo;
        this._dataHora = dataHora;
    }

    get idPubli(): number{
        return this._idPubli;
    }

    get conteudo(): string{
        return this._conteudo;
    }

    get dataHora(): Date{
        return this._dataHora;
    }

}

class Interacao extends Publicacao{
    private _idInteracao: number;
    private _tipoInteracao: number;
    private _dataHoraInteracao: Date;

    constructor(idUsuario: number, email: string, apelido: string, documentoCPF: number, idPubli: number, conteudo: string, dataHora: Date, idInteracao: number, tipoInteracao: number, dataHoraInteracao: Date){
        super(idUsuario, email, apelido, documentoCPF, idPubli, conteudo, dataHora);
        this._idInteracao = idInteracao;
        this._tipoInteracao = tipoInteracao;
        this._dataHoraInteracao = dataHoraInteracao;

    }

    get idInteracao(): number{
        return this._idInteracao;
    }

    get tipoInteracao(): number{
        return this._tipoInteracao;
    }

    get dataInteracao(): Date{
        return this._dataHoraInteracao;
    }
    
    curtir(){

    }

    descurtir(){

    }

    riso(){

    }

    surpresa(){

    }
      
}

class PublicacaoAvancada extends Publicacao{
    private _interacoes: Interacao[];
    
    constructor(idUsuario: number, email: string, apelido: string, documentoCPF: number, idPubli: number, conteudo: string, dataHora: Date, interacoes: Interacao[] ){
        super(idUsuario, email, apelido, documentoCPF, idPubli, conteudo, dataHora);
        this._interacoes = interacoes; 
    }
    
    get interacoes(): Interacao[]{
        return this._interacoes;
    }
}
