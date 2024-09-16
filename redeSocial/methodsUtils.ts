import { PublicacoesInexistentes, UsuariosInexistentes } from "./excecoes";
import { Publicacao } from "./publicacao";
import { Usuario } from "./usuario";

function ordenarDecrescente(publicacoes: Publicacao[]): Publicacao[]{
    const listaPubliOD = publicacoes.sort((publi1, publi2) => publi2.dataHora.getTime() - publi1.dataHora.getTime());

    return listaPubliOD;
}

function listarUsuarios(usuarios: Usuario[]): void {

    if(usuarios.length === 0){
        throw new UsuariosInexistentes('\nNao ha usuarios cadastrados !!');
    }

    for(let i = 0; i < usuarios.length; i++){
        console.log(usuarios[i].toString);
    }
}

function listarPublicacoes(publicacoes: Publicacao[]): void {
    if(publicacoes.length === 0){
        throw new PublicacoesInexistentes('\nNao ha publicacoes !!');
    }

    const listaDecre = ordenarDecrescente(publicacoes);

    for(let i = 0; i < listaDecre.length; i++){
        console.log(listaDecre[i].toString);
    }

}

function listarPublicacoesAtivas(publicacoes: Publicacao[]): void {
    if(publicacoes.length === 0){
        throw new PublicacoesInexistentes('\nNao ha publicacoes !!');
    }

    const publicacoesAtivas = publicacoes.filter(pub => pub.estadoAtual === true);

    if(publicacoesAtivas.length === 0){
        throw new PublicacoesInexistentes('\nNao ha publicacoes ativas !');
    }

    const listaDecre = ordenarDecrescente(publicacoesAtivas);

    for (let i = 0; i < listaDecre.length; i++) {
        console.log(listaDecre[i].toString);
    }
}

function listarPublicacoesArquivadas(publicacoes: Publicacao[]): void {
    if(publicacoes.length === 0){
        throw new PublicacoesInexistentes('\nNao ha publicacoes !!');
    }

    const publicacoesArquivadas = publicacoes.filter(pub => pub.estadoAtual === false);

    if(publicacoesArquivadas.length === 0){
        throw new PublicacoesInexistentes('\nNao ha publicacoes arquivadas !');
    }

    const listaDecre = ordenarDecrescente(publicacoesArquivadas);

    for (let i = 0; i < listaDecre.length; i++) {
        console.log(listaDecre[i].toString);
    }
}

function limparTela(): void{
    console.clear();
}


export { ordenarDecrescente, listarPublicacoes, listarUsuarios, listarPublicacoesAtivas, listarPublicacoesArquivadas, limparTela};

