const express = require('express');
const tokenRoutes = require('./routes/tokenRoutes');
const exerciceRoutes = require('./routes/exerciceRoutes');
require('dotenv').config();

const app = express();
const PORT = 8000;

app.use(express.json());
app.use('/api', tokenRoutes);
app.use('/api', exerciceRoutes);


app.listen(PORT, () => {
    console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
