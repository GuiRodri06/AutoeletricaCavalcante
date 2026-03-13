// src/models/AutoeletricaModel.js

const AutoeletricaModel = {
    getCompanyData: () => ({
        nome: "AutoElétrica Cavalcante",
        whatsapp: "5511999999999",
        endereco: "Rua das Baterias, 123",
        horario: "Segunda a Segunda: Atendimento 24 horas",
        coordenadas: "-23.5505,-46.6333" 
    }),

    getServices: () => [
        { id: 1, titulo: "Recarga de Bateria", icone: "🔋", precoBase: 50 },
        { id: 2, titulo: "Alternador", icone: "⚙️", precoBase: 120 },
        { id: 3, titulo: "Injeção Eletrônica", icone: "💻", precoBase: 150 },
        { id: 4, titulo: "Revisão Geral", icone: "🚗", precoBase: 100 }
    ]
};

module.exports = AutoeletricaModel;