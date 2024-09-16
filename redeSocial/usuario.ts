class Usuario{
    private static _contadorId: number = 1; 
    private _idUsuario: number;
    private _email: string;
    private _apelido: string;
    private _documentoCPF: string;

    constructor(email: string, apelido: string, documentoCPF: string){
        this._idUsuario = Usuario._contadorId++;
        this._email = email;
        this._apelido = apelido;
        this._documentoCPF = documentoCPF;
    }

    get toString(): string{
        return `\n>> Listando Usuarios 📋 << \n----------------------- \n🆔 ID Usuario: ${this._idUsuario} \n📧 E-mail: ${this._email} \n👤 Apelido: ${this._apelido} \n💳 CPF: ${this._documentoCPF} \n-----------------------`;
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

    get documentoCPF(): string{
        return this._documentoCPF;
    }
}


export { Usuario };