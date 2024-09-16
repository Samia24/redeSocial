import { Publicacao } from "./publicacao";
import { Usuario } from "./usuario";

enum TipoInteracao{
    Curtir = 1,
    Descurtir = 2,
    Riso = 3,
    Surpresa = 4
}

class Interacao{
    private _publicacao: Publicacao;
    private _usuario: Usuario;
    private static _contadorId: number = 1;
    private _idInteracao: number;
    private _tipoInteracao: TipoInteracao;
    private _dataHoraInteracao: Date = new Date();

    constructor(publicacao: Publicacao, usuario: Usuario, tipoInteracao: TipoInteracao){
        this._publicacao = publicacao;
        this._usuario = usuario;
        this._idInteracao = Interacao._contadorId++;
        this._tipoInteracao = tipoInteracao;
    }

    get idInteracao(): number{
        return this._idInteracao;
    }

    get tipoInteracao(): TipoInteracao{
        return this._tipoInteracao;
    }

    get dataInteracao(): Date{
        return this._dataHoraInteracao;
    }

    get publicacao(): Publicacao{
        return this._publicacao;
    }
    
    get usuario(): Usuario{
        return this._usuario;
    }
      
}

export{Interacao, TipoInteracao};