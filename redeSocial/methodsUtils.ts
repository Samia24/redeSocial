import { Publicacao } from "./publicacao";

function ordenarDecrescente(publicacoes: Publicacao[]): Publicacao[]{
    const listaPubliOD = publicacoes.sort((publi1, publi2) => publi2.dataHora.getTime() - publi1.dataHora.getTime());

    return listaPubliOD;
}

function listarPublicacoes(publicacoes: Publicacao[]): void {
    const listaDecre = ordenarDecrescente(publicacoes);

    for(let i = 0; i < listaDecre.length; i++){
        console.log(listaDecre[i].toString);
    }
}

export { ordenarDecrescente, listarPublicacoes};

