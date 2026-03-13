const express = require('express');
const path = require("path");
const app = express();

app.use(express.static(path.join(__dirname, "/public")));

// Rota Home
app.get('/', (req, res) => {
    res.render("index");
});

// Port do sistema
const PORT = 3030;
app.listen(PORT, () => {
    console.log(`Servidor: http://localhost:${PORT}`);
});