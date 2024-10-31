const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

// Configuración para servir archivos estáticos (como index.html)
app.use(express.static(path.join(__dirname, '../public')));

app.listen(PORT, () => {
    console.log(`Servidor Node.js iniciado en http://localhost:${PORT}`);
});
