let livros = [];
let id = 1;

function listar() {
    return livros;
}

function buscarPorId(livroId) {
    return livros.find(l => l.id === parseInt(livroId));
}

function criar({ titulo, autor, descricao, anoPublicacao }) {
    const novo = {
        id: id++,
        titulo,
        autor,
        descricao: descricao || '',
        anoPublicacao: parseInt(anoPublicacao),
        dataCadastro: new Date().toISOString().split('T')[0] // yyyy-mm-dd
    };
    livros.push(novo);
    return novo;
}

function atualizar(livroId, { titulo, autor, descricao, anoPublicacao }) {
    const index = livros.findIndex(l => l.id === parseInt(livroId));
    if (index === -1) return null;

    livros[index] = {
        ...livros[index],
        titulo: titulo !== undefined ? titulo : livros[index].titulo,
        autor: autor !== undefined ? autor : livros[index].autor,
        descricao: descricao !== undefined ? descricao : livros[index].descricao,
        anoPublicacao: anoPublicacao !== undefined ? parseInt(anoPublicacao) : livros[index].anoPublicacao
    };

    return livros[index];
}

function remover(livroId) {
    const index = livros.findIndex(l => l.id === parseInt(livroId));
    if (index === -1) return false;
    livros.splice(index, 1);
    return true;
}

module.exports = { listar, buscarPorId, criar, atualizar, remover };
