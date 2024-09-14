class Usuario{
    private _idUsuario: string;
    private _email: string;
    private _apelido: string;
    private _documentoCPF: string;

    constructor(idUsuario: string, email: string, apelido: string, documentoCPF: string){
        this._idUsuario = idUsuario;
        this._email = email;
        this._apelido = apelido;
        this._documentoCPF = documentoCPF;
    }

    get toString(): string{
        return `\nID Usuario: ${this._idUsuario} \nE-mail: ${this._email} \nApelido: ${this._apelido} \nCPF: ${this._documentoCPF}`;
    }

    get idUsuario(): string{
        return this._idUsuario;
    }

    get email(): string{
        return this._email;
    }

    get apelido(): string{
        return this._apelido;
    }

    get documentoCPF(): string{
        return this._documentoCPF;
    }
}


export { Usuario };