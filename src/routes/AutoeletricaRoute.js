const express = require('express');
const router = express.Router();
const AutoeletricaController = require('../controllers/AutoeletricaController');

// Rota principal que chama o controlador
router.get('/', AutoeletricaController.renderHome);

router.get('/contacto', AutoeletricaController.renderContact);

module.exports = router;