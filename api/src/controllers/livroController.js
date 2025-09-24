const livroService = require('../services/livroService');

exports.listar = (req, res) => {
    res.json(livroService.listar());
};

exports.buscarPorId = (req, res) => {
    const { id } = req.params;
    const livro = livroService.buscarPorId(id);
    if (!livro) return res.status(404).json({ error: 'Livro não encontrado' });
    res.json(livro);
};

exports.criar = (req, res) => {
    const { titulo, autor, descricao, anoPublicacao } = req.body;

    if (!titulo || !autor || !anoPublicacao) {
        return res.status(400).json({ error: 'Campos obrigatórios: titulo, autor e anoPublicacao' });
    }

    const novoLivro = livroService.criar({ titulo, autor, descricao, anoPublicacao });
    res.status(201).json(novoLivro);
};

exports.atualizar = (req, res) => {
    const { id } = req.params;
    const { titulo, autor, descricao, anoPublicacao } = req.body;

    const atualizado = livroService.atualizar(parseInt(id), { titulo, autor, descricao, anoPublicacao });
    if (!atualizado) return res.status(404).json({ error: 'Livro não encontrado' });
    res.json(atualizado);
};

exports.remover = (req, res) => {
    const { id } = req.params;
    const removido = livroService.remover(parseInt(id));
    if (!removido) return res.status(404).json({ error: 'Livro não encontrado' });
    res.status(204).send();
};
