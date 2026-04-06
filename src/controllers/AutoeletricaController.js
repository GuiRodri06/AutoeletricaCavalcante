// src/controllers/AutoeletricaController.js

const AutoeletricaModel = require('../models/AutoeletricaModel');

const AutoeletricaController = {
    renderHome: (req, res) => {
        // O dado da empresa já foi injetado pelo Middleware
        const servicos = AutoeletricaModel.getServices();
        const avaliacoes = AutoeletricaModel.getReviews().slice(0, 3);;
        const showcase = AutoeletricaModel.getShowcase();
        
        res.render('pages/index', { servicos, avaliacoes, showcase });
    },

    renderService: (req, res) => {
        const id = req.params.id;
        const allServices = AutoeletricaModel.getServices();
        //const findService = allServices.find(s => s.id == id);
        
        res.render('pages/service', { allServices });
    },

    renderReview: (req, res) => {

        const avaliacoes = AutoeletricaModel.getReviews();

        res.render('pages/reviews', {avaliacoes});
    },

    renderContact: (req, res) => {

        res.render('pages/contact');
    }
};

module.exports = AutoeletricaController;