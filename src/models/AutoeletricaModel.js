// src/models/AutoeletricaModel.js

const AutoeletricaModel = {
    getCompanyData: () => ({
        nome: "Centro Automotivo 24 Horas",
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
    ],

    getReviews: () => [
        {
            id: 1,
            autor: "João Silva",
            inicial: "J", // Letra para o avatar
            tempo: "Há 2 semanas",
            texto: "Excelente profissional! Fiquei parado na estrada com problema no alternador e eles chegaram super rápido. Preço justo e serviço impecável.",
            linkAvaliacao: "https://g.co/kgs/exemplo1" // Link real do Google Maps
        },
        {
            id: 2,
            autor: "Maria Fernandes",
            inicial: "M",
            tempo: "Há 1 mês",
            texto: "A única autoelétrica que conseguiu resolver o problema crônico de bateria do meu carro. Atendimento nota 10 e oficina muito organizada.",
            linkAvaliacao: "https://g.co/kgs/exemplo2"
        },
        {
            id: 3,
            autor: "Carlos Almeida",
            inicial: "C",
            tempo: "Há 3 meses",
            texto: "Transparência total no orçamento. Não inventaram defeitos e cobraram o valor combinado. Recomendo a todos!",
            linkAvaliacao: "https://g.co/kgs/exemplo3"
        }
    ]
};

module.exports = AutoeletricaModel;