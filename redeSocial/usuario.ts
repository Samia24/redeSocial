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


export { Usuario };