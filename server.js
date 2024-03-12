//server.js
const express = require('express');
const tokenRoutes = require('./routes/tokenRoutes');
const exerciceRoutes = require('./routes/exerciceRoutes');
const chat = require('./routes/chatGPTRoutes');
require('dotenv').config();

const app = express();
const PORT = 8000;

app.use(express.json());
app.use('/api', tokenRoutes);
app.use('/api', exerciceRoutes);
app.use('/api', chat);


app.listen(PORT, () => {
    console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
