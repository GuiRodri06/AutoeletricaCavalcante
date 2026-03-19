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
        {
            id: 1,
            titulo: "Injeção Eletrônica",
            icone: "bi-cpu-fill", // Ícone de processador/tecnologia
            descricao: "Diagnóstico computadorizado de precisão para falhas e performance."
        },
        {
            id: 2,
            titulo: "Baterias e Carga",
            icone: "bi-battery-charging", // Ícone de bateria carregando
            descricao: "Substituição e testes de alternador com equipamentos de ponta."
        },
        {
            id: 3,
            titulo: "Ar-Condicionado",
            icone: "bi-snow2", // Ícone de floco de neve estilizado
            descricao: "Higienização, recarga de gás e manutenção completa do sistema."
        },
        {
            id: 4,
            titulo: "Motores e Elétrica",
            icone: "bi-lightning-charge-fill", // Ícone de energia/raio
            descricao: "Reparo em motores de partida, alternadores e chicotes elétricos."
        }
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
    ],

    getShowcase: () => [
        {
            id: 1,
            titulo: "Diagnóstico Computadorizado",
            descricao: "Utilizamos scanners de última geração para identificar falhas ocultas no sistema eletrônico, garantindo precisão e evitando trocas desnecessárias de peças.",
            imagem: "/img/oficinaMecanica.jpg",
            tag: "Tecnologia"
        },
        {
            id: 2,
            titulo: "Recuperação de Alternadores",
            descricao: "Um serviço artesanal que devolve a vida ao sistema de carga do seu veículo. Testamos cada componente sob estresse para garantir durabilidade máxima.",
            imagem: "/img/oficinaMecanica.jpg",
            tag: "Precisão"
        },
        {
            id: 3,
            titulo: "Instalações de Alta Performance",
            descricao: "Seja para som, iluminação LED ou acessórios complexos, nossa fiação é feita com isolamento térmico e conectores padrão original.",
            imagem: "/img/oficinaMecanica.jpg",
            tag: "Qualidade"
        }
    ]
};

module.exports = AutoeletricaModel;