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
            autor: "M. Cassimiro",
            inicial: "M", // Letra para o avatar
            tempo: "Há 1 semana",
            texto: "O senhor José já nos salvou várias vezes! Encontramos ele aqui no Google e não largamos mais. Levamos o carro na Modas e eles fizeram diagnóstico, ficamos sem carro por quase 2 semanas, trocaram sensores e nada resolvido. Levamos no senhor José, ele resolveu esse problema e outros aparecerem nos últimos meses. Ele sempre encontra disponibilidade, faz o serviço muito bem feito, e super honesto e nos mantém informados se encontra nas peças/manutenção. Super recomendo!",
            linkAvaliacao: "https://share.google/0sV2H0LntZKtEUqJJ" 
        },
        {
            id: 2,
            autor: "Franquelim Jesus Fontes Fontes",
            inicial: "F",
            tempo: "Há 7 meses",
            texto: "Foi um grande homem não se negou a fazer um grande favor em ir ter comigo as 4 horas da manhã para fazer um serviço que todos negaram não sei porquê agradeço do fundo do meu coração a este homem que não é português é brasileiro mas para mim é muito melhor que muitos portugueses obrigados meu amigo",
            linkAvaliacao: "https://share.google/zIot0929TQNdWrNoDgs/exemplo2"
        },
        {
            id: 3,
            autor: "Daniel Lima",
            inicial: "D",
            tempo: "Há 1 ano",
            texto: "José é um mecânico excepcional, sempre pronto para ajudar onde for necessário. Diferente de muitos, ele não tem uma oficina fixa, mas vai até o local onde o carro precisa de assistência, trazendo praticidade e eficiência. Já cuidou de dois carros meus com total profissionalismo: em um, trocou lâmpadas e ajustou o sistema de fios para restaurar a iluminação; no outro, fez a substituição da central de fusíveis de um Megane, garantindo que tudo voltasse a funcionar perfeitamente. Além da competência e dedicação, José cobra um preço justo e é super simpático. Um verdadeiro achado para quem precisa de um mecânico de confiança!",
            linkAvaliacao: "https://share.google/lBkxNqUKaCBK64RfY"
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