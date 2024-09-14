import { UsuarioInvalido, PublicacaoInvalida, EmailInvalido, InteracaoImpossibilitada, EstadoInvalido, PublicacaoNaoAvancada } from "./excecoes";
import { Usuario } from "./usuario";
import { Publicacao, PublicacaoAvancada } from "./publicacao";
import { ordenarDecrescente, listarPublicacoes } from "./methodsUtils";
import { TipoInteracao, Interacao } from "./interacao";

class RedeSocial{
    private _usuarios: Usuario[] = [];
    private _publicacoes: Publicacao[] = [];


    validarUsuario(idUsuario: string, email: string): boolean {
        for (let i = 0; i < this._usuarios.length; i++) {
            if (this._usuarios[i].idUsuario === idUsuario && this._usuarios[i].email === email) {
                throw new UsuarioInvalido("\n> Usuario e/ou e-mail já existentes !!\n");
            }
        }
        return true;
    }
    
    incluirUsuario(usuario: Usuario): void{
        if((this.validarUsuario(usuario.idUsuario, usuario.email))){
            this._usuarios.push(usuario);
        }
    }
    
    consultarUsuarioId(idUsuario: string): Usuario {
        for (let i = 0; i < this._usuarios.length; i++) {
            if (this._usuarios[i].idUsuario === idUsuario) {
                return this._usuarios[i];
            }
        }
        throw new UsuarioInvalido("\n> Usuario nao existente !!\n");
    }
    
    consultarUsuarioEmail(email: string): Usuario {
        for (let i = 0; i < this._usuarios.length; i++) {
            if (this._usuarios[i].email === email) {
                return this._usuarios[i];
            }
        }
        throw new EmailInvalido("\n> E-mail nao existente !!\n");
    }
    
    validarPubli(idPubli: string): boolean{
        for (let i = 0; i < this._publicacoes.length; i++) {
            if (this._publicacoes[i].idPublicacao === idPubli) {
                return true;
            }
        }
        throw new PublicacaoInvalida("\n> Publicacao invalida !!\n");
    }
    
    incluirPubli(publicacao: Publicacao): void{
        if(this.validarPubli(publicacao.idPublicacao)){
            this._publicacoes.push(publicacao);
        }

    }

    consultarPubli(idPubli: string): Publicacao {
        for (let i = 0; i < this._publicacoes.length; i++) {
            if (this._publicacoes[i].idPublicacao === idPubli) {
                return this._publicacoes[i];
            }
        }
        throw new PublicacaoInvalida("\n> Publicacao nao existente !!\n");
    }

    exibirPublicacoesOrdenadas(): void {
        listarPublicacoes(this._publicacoes);

    }

    buscarPublicacoesPorUsuario(usuario: Usuario): Publicacao[]{
        const publicacoesUsuario = this._publicacoes.filter((publicacaoAtual) => publicacaoAtual.usuario.idUsuario === usuario.idUsuario);

        return ordenarDecrescente(publicacoesUsuario);
    }

    exibirPublicacoesUsuario(usuario: Usuario): void {
        const publisUsuarios = this.buscarPublicacoesPorUsuario(usuario);
        listarPublicacoes(publisUsuarios);
    }

    reagir(usuario: Usuario, publicacao: Publicacao, tipoInteracao: TipoInteracao): void {
        if (!(publicacao instanceof PublicacaoAvancada)) {
            throw new InteracaoImpossibilitada('\nReação só é possível em publicações avançadas!');
        }
        
        const interacao = new Interacao(publicacao, usuario, tipoInteracao);
        publicacao.adicionarInteracao(interacao);
    }

    alterarEstado(novoEstado: boolean, idPublicacao: string){
        let publicacao = this.consultarPubli(idPublicacao);
        if(novoEstado === publicacao.estadoAtual){
            throw new EstadoInvalido('\nPublicacao ja encontra-se nesse estado !!');
        }
        publicacao.setEstadoAtual = novoEstado;
    }

    exibirAnalise(idPublicacao: string){
        let publicacao = this.consultarPubli(idPublicacao);
        if(!(publicacao instanceof PublicacaoAvancada)){
            throw new PublicacaoNaoAvancada('\nNão é uma publicacao avancada, nao tem interacoes !')
        }
        let analise = publicacao.analisarEngajamento();
        console.log(analise);
    }


    get usuarios(): Usuario[]{
        return this._usuarios;
    }

    get publicacoes(): Publicacao[]{
        return this._publicacoes;
    }

    
}

export { RedeSocial };