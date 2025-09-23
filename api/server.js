const express = require('express');
const routes = require('./src/routes');

const app = express();
app.use(express.json()); // para ler JSON no body
app.use('/api', routes);

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
