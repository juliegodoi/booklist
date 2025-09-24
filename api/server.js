const express = require('express');
const cors = require('cors');
const routes = require('./src/routes');

const app = express();
app.use(cors({ origin: 'http://localhost:3000' })); // front rodando em 3000
app.use(express.json());

app.use('/api', routes);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`API rodando em http://localhost:${PORT}`));
