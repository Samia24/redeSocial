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

class PublicacaoExistente extends AplicacaoError{
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

class EstadoInvalido extends AplicacaoError{
    constructor(message: string) {
        super(message);
    }
}
class PublicacaoNaoAvancada extends AplicacaoError{
    constructor(message: string) {
        super(message);
    }
}

class PublicacaoDesativada extends AplicacaoError{
    constructor(message: string) {
        super(message);
    }
}

class PublicacoesInexistentes extends AplicacaoError{
    constructor(message: string) {
        super(message);
    }
}

class UsuariosInexistentes extends AplicacaoError{
    constructor(message: string) {
        super(message);
    }
}

export{AplicacaoError, UsuarioInvalido, PublicacaoExistente, EmailInvalido, InteracaoExistente, InteracaoImpossibilitada, EstadoInvalido, PublicacaoNaoAvancada, PublicacaoDesativada, PublicacoesInexistentes, UsuariosInexistentes};