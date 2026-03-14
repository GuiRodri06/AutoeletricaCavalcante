const express = require('express');
const AutoeletricaModel = require('./src/models/AutoeletricaModel');
const AutoeletricaRoute = require('./src/routes/AutoeletricaRoute'); 
const path = require('path');
const app = express();

// Configura o EJS como motor de visualização
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Define a pasta de arquivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

// Middleware Global (Injeta os dados da empresa em todas as views)
app.use((req, res, next) => {
    res.locals.empresa = AutoeletricaModel.getCompanyData();
    next();
});

// Rota para o home
app.use('/', AutoeletricaRoute);
app.use('/contacto', AutoeletricaRoute);



// Porta do Server
const PORT = 3030;
app.listen(PORT, () => {
    console.log(`Servidor rodando em: http://localhost:${PORT}`);
});