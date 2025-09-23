const express = require('express');
const cors = require('cors');
const routes = require('./src/routes');

const app = express();

// habilita CORS para todas as origens
app.use(cors());

// para aceitar JSON no body
app.use(express.json());

app.use('/api', routes);

const PORT = 4000;
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
