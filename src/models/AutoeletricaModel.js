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
            linkAvaliacao: "https://share.google/dOao8R6znPEUGjKRp"
        },
        {
            id: 3,
            autor: "Milene Oliveira",
            inicial: "M",
            tempo: "Há 4 meses",
            texto: "Domingo, quase nenhum mecânico aberto, metemos o combustível errado no carro. Ligamos para o seguro, não cobriam esse tipo de serviço, ligamos para a Norauto, não fazem. Encontramos aqui no google maps o contato do seu José que prontamente nos socorreu. Recomendo demais o trabalho dele.",
            linkAvaliacao: "https://share.google/enSoIPy7hoqzYSmPU"
        },
        {
            id: 4,
            autor: "Sousan Portugal",
            inicial: "S",
            tempo: "Há 3 semanas",
            texto: "Liguei para o centro, pedir mudar bateria do meu carro que já não andava. O sr. José muito simpático atendeu me e deslocou para a minha casa. Depois 2 horas teve o meu carro arranjado. Gostei o disponibilidade do sr. Para deslocar é rapidez do trabalho.",
            linkAvaliacao: "https://share.google/jhw5pISZi5zhwikOx"
        },
        {
            id: 5,
            autor: "Luís Alex Silva",
            inicial: "L",
            tempo: "Há 1 ano",
            texto: "Excelente escolha! O serviço correu muito bem, o senhor José foi super prestável, amável e atencioso aos detalhes, deixando um trabalho com dignos de uma oficina premium! Recomendo vivamente !",
            linkAvaliacao: "https://share.google/OU1ZhSnrEN8A9ZzUI"
        },
        {
            id: 6,
            autor: "Foco no Visto",
            inicial: "F",
            tempo: "Há 1 ano",
            texto: "Tive o meu problema elétrico corrigido com 100% do resultado satisfatório. O Sr. José utilizou seu Scanner automotivo para verificar possíveis falhas elétricas e conseguiu consertar todo o problema do carro. Obrigado pelo trabalho.",
            linkAvaliacao: "https://share.google/1Spsc40MrbqyfKOaP"
        },
        {
            id: 7,
            autor: "Daniel Lima",
            inicial: "D",
            tempo: "Há 1 ano",
            texto: "José é um mecânico excepcional, sempre pronto para ajudar onde for necessário. Diferente de muitos, ele não tem uma oficina fixa, mas vai até o local onde o carro precisa de assistência, trazendo praticidade e eficiência. Já cuidou de dois carros meus com total profissionalismo: em um, trocou lâmpadas e ajustou o sistema de fios para restaurar a iluminação; no outro, fez a substituição da central de fusíveis de um Megane, garantindo que tudo voltasse a funcionar perfeitamente. Além da competência e dedicação, José cobra um preço justo e é super simpático. Um verdadeiro achado para quem precisa de um mecânico de confiança!",
            linkAvaliacao: "https://share.google/lBkxNqUKaCBK64RfY"
        },
        {
            id: 8,
            autor: "Catarina Santos",
            inicial: "C",
            tempo: "Há 7 meses",
            texto: "Muito obrigada,Sr. José.Foi eficiente, e resolveu o meu problema.O meu carro ficou sem bateria. Deslocou-se ao meu domicílio e fez a troca por uma nova, sem ter de chamar um reboque ou ir a uma oficina. Recomendo. Muito obrigada.",
            linkAvaliacao: "https://share.google/x8KjXhN7ZlPBYcA4B"
        },
        {
            id: 9,
            autor: "Artur Couteiro",
            inicial: "A",
            tempo: "Há 8 meses",
            texto: "Serviço Top. Tive um problema no elevador do vidro da minha carrinha e um sensor no motor , o Sr. José resolveu o problema. É uma pessoa super professional, prestável e honesta. Recomendo.",
            linkAvaliacao: "https://share.google/GRJGR7uA6S6hl5Otq"
        },
        {
            id: 10,
            autor: "Célia Zandamela",
            inicial: "C",
            tempo: "Há 1 ano",
            texto: "O Sr. José é uma pessoa maravilhosa e profissional 5 estrelas. Mal o conheci senti confiança e soube que Deus o tinha colocado no meu caminho. Resolveu o problema do meu carro e mostrou-se disponível para qualquer coisa que volte a acontecer. Recomendo!",
            linkAvaliacao: "https://share.google/gTap2aAd4A3NeImql"
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