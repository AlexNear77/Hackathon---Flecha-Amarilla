const express = require('express');
const tokenRoutes = require('./routes/tokenRoutes');

const app = express();
const PORT = 3000;

app.use(express.json());
app.use('/api', tokenRoutes);

app.listen(PORT, () => {
    console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
