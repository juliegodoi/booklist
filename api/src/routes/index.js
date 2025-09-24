const express = require('express');
const controller = require('../controllers/livroController');

const router = express.Router();

// endpoints
router.get('/livros', controller.listar);
router.get('/livros/:id', controller.buscarPorId);
router.post('/livros', controller.criar);
router.put('/livros/:id', controller.atualizar);
router.delete('/livros/:id', controller.remover);

module.exports = router;
