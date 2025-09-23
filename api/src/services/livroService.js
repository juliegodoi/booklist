let livros = [];
let id = 1;

function listar() {
    return livros;
}

function criar({ titulo, autor }) {
    const novo = { id: id++, titulo, autor };
    livros.push(novo);
    return novo;
}

function atualizar(livroId, { titulo, autor }) {
    const index = livros.findIndex(l => l.id === livroId);
    if (index === -1) return null;
    livros[index] = { ...livros[index], titulo, autor };
    return livros[index];
}

function remover(livroId) {
    const index = livros.findIndex(l => l.id === livroId);
    if (index === -1) return false;
    livros.splice(index, 1);
    return true;
}

module.exports = { listar, criar, atualizar, remover };
