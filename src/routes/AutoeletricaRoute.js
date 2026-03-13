const express = require('express');
const router = express.Router();
const AutoeletricaController = require('../controllers/AutoeletricaController');

// Rota principal que chama o controlador
router.get('/', AutoeletricaController.renderHome);

module.exports = router;