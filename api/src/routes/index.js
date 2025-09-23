const express = require('express');
const router = express.Router();
const livroController = require('../controllers/livroController');

// Rotas CRUD
router.get('/livros', livroController.listar);
router.post('/livros', livroController.criar);
router.put('/livros/:id', livroController.atualizar);
router.delete('/livros/:id', livroController.remover);

module.exports = router;
