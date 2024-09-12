class AplicacaoError extends Error{
    constructor(message: string) {
        super(message);
    }
}

class UsuarioInvalido extends AplicacaoError{
    constructor(message: string) {
        super(message);
    }
}

class EmailInvalido extends AplicacaoError{
    constructor(message: string) {
        super(message);
    }
}

class PublicacaoInvalida extends AplicacaoError{
    constructor(message: string) {
        super(message);
    }
}

class InteracaoExistente extends AplicacaoError{
    constructor(message: string) {
        super(message);
    }
}

class InteracaoImpossibilitada extends AplicacaoError{
    constructor(message: string) {
        super(message);
    }
}

export{AplicacaoError, UsuarioInvalido, PublicacaoInvalida, EmailInvalido, InteracaoExistente, InteracaoImpossibilitada};