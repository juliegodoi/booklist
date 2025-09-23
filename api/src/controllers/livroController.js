const livroService = require('../services/livroService');

exports.listar = (req, res) => {
    res.json(livroService.listar());
};

exports.criar = (req, res) => {
    const { titulo, autor } = req.body;
    const novoLivro = livroService.criar({ titulo, autor });
    res.status(201).json(novoLivro);
};

exports.atualizar = (req, res) => {
    const { id } = req.params;
    const { titulo, autor } = req.body;
    const atualizado = livroService.atualizar(parseInt(id), { titulo, autor });
    if (!atualizado) return res.status(404).json({ error: "Livro não encontrado" });
    res.json(atualizado);
};

exports.remover = (req, res) => {
    const { id } = req.params;
    const removido = livroService.remover(parseInt(id));
    if (!removido) return res.status(404).json({ error: "Livro não encontrado" });
    res.json({ message: "Livro removido" });
};
