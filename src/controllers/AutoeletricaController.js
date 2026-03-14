// src/controllers/AutoeletricaController.js

const AutoeletricaModel = require('../models/AutoeletricaModel');

const AutoeletricaController = {
    renderHome: (req, res) => {
        // O dado da empresa já foi injetado pelo Middleware
        const servicos = AutoeletricaModel.getServices();
        
        res.render('index', { servicos });
    },

    /* Se amanhã você criar uma página só de um serviço:
    renderDetalheServico: (req, res) => {
        const id = req.params.id;
        const todos = AutoeletricaModel.getServices;
        const servico = todos.find(s => s.id == id);
        
        res.render('detalhe', { servico });
    } */

    renderContact: (req, res) => {

        res.render('pages/contact');
    }
};

module.exports = AutoeletricaController;