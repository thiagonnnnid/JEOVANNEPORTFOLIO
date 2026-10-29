const topics = {
  texto: {
    tag: "LEITURA E ESCRITA",
    symbol: "Aa",
    title: "Gêneros textuais",
    description: "Os gêneros textuais são formas de comunicação usadas em diferentes situações, como notícias, crônicas, cartas, entrevistas, poemas e reportagens. Cada gênero tem características, objetivos e leitores próprios.",
    practice: "Escolha dois textos do cotidiano e compare a finalidade, a linguagem, a estrutura e o público de cada um."
  },
  gramatica: {
    tag: "ESTRUTURA DA LÍNGUA",
    symbol: "✎",
    title: "Gramática e ortografia",
    description: "A gramática ajuda a compreender como as palavras e as frases se organizam. Ortografia, acentuação e pontuação contribuem para que as mensagens sejam claras e adequadas ao contexto.",
    practice: "Revise um pequeno texto e observe o uso de vírgulas, pontos, acentos e concordância."
  },
  literatura: {
    tag: "ARTE E IMAGINAÇÃO",
    symbol: "❝",
    title: "Literatura",
    description: "A literatura expressa experiências humanas por meio de poemas, contos, romances, crônicas e outras formas artísticas. Ler obras literárias permite conhecer diferentes épocas, culturas e perspectivas.",
    practice: "Leia um poema ou conto e identifique o tema, o narrador, as personagens e a mensagem que você percebeu."
  },
  redacao: {
    tag: "ESCRITA E PENSAMENTO",
    symbol: "✍",
    title: "Redação e argumentação",
    description: "Produzir um bom texto exige planejamento, organização de ideias, clareza e revisão. Na argumentação, é importante apresentar uma opinião e sustentá-la com justificativas e exemplos.",
    practice: "Escolha um tema, escreva sua opinião em uma frase e apresente dois argumentos que expliquem seu ponto de vista."
  },
  oralidade: {
    tag: "DIÁLOGO E EXPRESSÃO",
    symbol: "◖",
    title: "Oralidade e comunicação",
    description: "A oralidade envolve falar, ouvir, apresentar ideias e participar de conversas. Adequar a linguagem à situação e respeitar o turno de fala tornam a comunicação mais eficiente.",
    practice: "Explique um assunto estudado em um minuto e depois confira se suas ideias ficaram organizadas e fáceis de compreender."
  }
};

const topicButtons = document.querySelectorAll(".topic-button");
topicButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const topic = topics[button.dataset.topic];
    if (!topic) return;
    topicButtons.forEach((item) => {
      item.classList.remove("active");
      item.setAttribute("aria-selected", "false");
    });
    button.classList.add("active");
    button.setAttribute("aria-selected", "true");
    document.getElementById("topicTag").textContent = topic.tag;
    document.getElementById("topicSymbol").textContent = topic.symbol;
    document.getElementById("topicTitle").textContent = topic.title;
    document.getElementById("topicDescription").textContent = topic.description;
    document.getElementById("topicPractice").textContent = topic.practice;
  });
});

const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");
menuToggle.addEventListener("click", () => {
  const isOpen = navMenu.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.setAttribute("aria-label", isOpen ? "Fechar menu" : "Abrir menu");
  menuToggle.textContent = isOpen ? "×" : "☰";
});
navMenu.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Abrir menu");
    menuToggle.textContent = "☰";
  });
});

document.getElementById("year").textContent = new Date().getFullYear();
