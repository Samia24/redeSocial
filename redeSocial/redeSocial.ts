import { UsuarioInvalido, PublicacaoInvalida, EmailInvalido, InteracaoImpossibilitada } from "./excecoes";
import { Usuario } from "./usuario";
import { Publicacao, PublicacaoAvancada } from "./publicacao";
import { ordenarDecrescente, listarPublicacoes } from "./methodsUtils";
import { TipoInteracao, Interacao } from "./interacao";

class RedeSocial{
    private _usuarios: Usuario[] = [];
    private _publicacoes: Publicacao[] = [];

    constructor(usuarios: Usuario[], publicacoes: Publicacao[]){
        this._usuarios = usuarios;
        this._publicacoes = publicacoes;

    }

    validarUsuario(idUsuario: number, email: string): boolean {
        for (let i = 0; i < this._usuarios.length; i++) {
            if (this._usuarios[i].idUsuario === idUsuario && this._usuarios[i].email === email) {
                return true;
            }
        }
        throw new UsuarioInvalido("\n> Usuario e/ou e-mail invalidos !!\n");
    }
    
    incluirUsuario(usuario: Usuario): void{
        if(this.validarUsuario(usuario.idUsuario, usuario.email)){
            this._usuarios.push(usuario);
        }
    }
    
    consultarUsuarioId(idUsuario: number): Usuario {
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
    
    validarPubli(idPubli: number): boolean{
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

    consultarPubli(idPubli: number): Publicacao {
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

    reagir(usuario: Usuario, publicacao: Publicacao, tipoInteracao: TipoInteracao): void{
        if(publicacao !instanceof PublicacaoAvancada){
            throw new InteracaoImpossibilitada(`\nReação só é possível em publicações avançadas !`);
        }
        const interacao = new Interacao(publicacao, usuario, tipoInteracao);
        //Força a publicação ser Publicação Avançada
        (<PublicacaoAvancada>publicacao).adicionarInteracao(interacao);
    }

    get usuarios(): Usuario[]{
        return this._usuarios;
    }

    get publicacoes(): Publicacao[]{
        return this._publicacoes;
    }

    
}

export { RedeSocial };