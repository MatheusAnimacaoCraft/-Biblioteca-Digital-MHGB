// "Banco de dados" dos livros em JS
const livros = [
  {
    imagem: "SRC/LivroGênerosImg/eu sou malala.png",
    titulo: "Eu Sou Malala",
    autor: "Adriana Carranc",
    generos: "Biografia",
    modalId: "modal1",
    descrição2:"",
    descrição: "O livro acompanha a infância da garota no Paquistão, os primeiros anos de vida escolar, as asperezas da vida numa região marcada pela desigualdade social, as belezas do deserto e as trevas da vida sob o Talibã.",
    link: "#"
  },
  {
    imagem: "SRC/LivroGênerosImg/Diário de uma garota nada popular.png",
    titulo: "Diário de uma garota nada popular",
    autor: "Rachel Rénée Russell",
    generos: "ficção",
    modalId: "modal2",
    descrição2:"",
    descrição: "Uma adolescente atrapalhada e cheia de confissões como Nikki não poderia viver sem seu diário. Mas quando a menina não se lembra onde o deixou, essa emergêencia precisa de uma investigação! Depois de conquistar o público brasileiro, Nikki Maxwell esta de volta com seu Diário de uma garota nada popular.",
    link: "#"
  },
  {
    imagem: "SRC/LivroGênerosImg/O fanstástico mistério de Feiurinha 1.png",
    titulo: "fanstástico mistério de Feiurinha",
    autor: "Pedro Bandeira",
    generos: "LITERATURA INFANTO JUVENIL",
    modalId: "modal3",
    descrição2:"",
    descrição: "explora o que acontece após o ''felizes para sempre'' dos contos de fadas, questionando a ideia de que a felicidade reside apenas no casamento e na rotina familiar. A história acompanha Branca de Neve e outras princesas em busca de Feiurinha, uma princesa cujo conto ainda não foi escrito, e que desapareceu.",
    link: "#"
  },
  {
    imagem: "SRC/LivroGênerosImg/Susy e as águas - vivas.png",
    titulo: "Susy e as águas-vivas",
    autor: "Ali Benjamin",
    generos: "ROMANCEL",
    modalId: "modal4",
    descrição2:"",
    descrição:"Este livro tem uma história que aborda temas sensíveis como perdas, luto, aceitação, amizades e seus possíveis fins trágicos. Tem uma narrativa delicada e comovente, nos fazendo mergulhar nos pensamentos e sentimentos da jovem Suzy, uma garota de doze anos que está enfrentando a morte repentina de sua ex melhor amiga.",
    link: "#"
  },
  {
    imagem: "SRC/LivroGênerosImg/Shakespeare 1.png",
    titulo: "Shakespeare",
    autor: "?",
    generos: "GRANDES AUTORES",
    modalId: "modal5",
    descrição2:"",
    descrição:"As peças históricas de Shakespeare, também conhecidas como ''Histórias'', são um dos géneros dramáticos mais importantes do autor. Elas retratam a história da Inglaterra, focando frequentemente em eventos e personagens reais, embora Shakespeare tenha tomado algumas liberdades criativas para fins dramáticos. ",
    link: "#"
  },
  {
    imagem: "SRC/LivroGênerosImg/Sonic The Hedgehog – Volume 1 Depois da guerra.png",
    titulo: "Sonic The Hedgehog – Volume 1 Depois da guerra",
    autor: "Ian Flynn",
    generos: "FICÇÃO",
    modalId: "modal6",
    descrição2:"Sonic The Hedgehog – Volume 1: Depois da guerra - Acompanha pôster e marcador! - Livro novo! ",
    descrição:"Dr. Eggman, o gênio do mal, foi vencido – mas o trabalho de Sonic ainda não acabou! No rastro de sua última e épica batalha, bots estão à solta e atacando pelas vilas mundo afora. Para derrotá-los, Sonic vai precisar de ajuda dos amigos Tails, Knuckles e Amy, assim como de novos e incríveis aliados. Correndo velozmente das telas dos games para as páginas dos quadrinhos, o ouriço azul tão querido por todos nós embala essa nova série trazida com exclusividade pela Geektopia, com tradução do grande Érico Assis. Um quadrinho com a excelência de sempre, feito com carinho para todas as gerações de leitores",
    link: "https://grabber.zone/comics/idw-sonic-portugues/volume-1/"
  },
  {
    imagem: "SRC/LivroGênerosImg/Sonic The Hedgehog – Volume 2 A sina do Dr. Eggman.png",
    titulo: "Sonic The Hedgehog – Volume 2 A sina do Dr. Eggman",
    autor: "Ian Flynn",
    generos: "FICÇÃO",
    modalId: "modal7",
    descrição2:"Sonic The Hedgehog – Volume 2: A sina do Dr. EGGMAN UM DOS PERSONAGENS MAIS QUERIDOS DOS GAMES AGORA EM QUADRINHOS!",
    descrição:"vencido – mas o trabalho de Sonic ainda não acabou! No rastro de sua última e épica batalha, bots estão à solta e atacando pelas vilas mundo afora. Para derrotá-los, Sonic vai precisar de ajuda dos amigos Tails, Knuckles e Amy, assim como de novos e incríveis aliados.                                                       Correndo velozmente das telas dos games para as páginas dos quadrinhos, o ouriço azul tão querido por todos nós embala essa nova série trazida com exclusividade pela Geektopia, com tradução do grande Érico Assis. Um quadrinho com a excelência de sempre, feito com carinho para todas as gerações de leitores – e gamers!",
    link: "https://grabber.zone/comics/idw-sonic-portugues/volume-2/"
  },

];

const livrosCarrosel = [
  {
    imagem: "SRC/LivroGênerosImg/eu sou malala.png",
    titulo: "Eu Sou Malala",
    descrição2:"",
    descrição: "O livro acompanha a infância da garota no Paquistão, os primeiros anos de vida escolar, as asperezas da vida numa região marcada pela desigualdade social, as belezas do deserto e as trevas da vida sob o Talibã.",
    label: "Abrir modal do livro Eu Sou Malala",
    modalId: "modal1",
    alt: "Capa do livro Eu Sou Malala",
    link: "#"
  },
  {
    imagem: "SRC/LivroGênerosImg/Diário de uma garota nada popular.png",
    titulo: "Diário de uma garota nada popular",
    descrição2:"",
    descrição: "Uma adolescente atrapalhada e cheia de confissões como Nikki não poderia viver sem seu diário. Mas quando a menina não se lembra onde o deixou, essa emergêencia precisa de uma investigação! Depois de conquistar o público brasileiro, Nikki Maxwell esta de volta com seu Diário de uma garota nada popular.",
    label: "Abrir modal do Diário de uma garota nada popular",
    modalId: "modal2",
    alt: "Capa do livro Diário de uma garota nada popular",
    link: "#"
  },
  {
    imagem: "SRC/LivroGênerosImg/O Diário de Anne Frank.png",
    titulo: "O Diário de Anne Frank",
    descrição2:"",
    descrição: "Suas anotações narram os sentimentos, os medos e as pequenas alegrias de uma menina judia que, como sua família, lutou em vão para sobreviver ao Holocausto. Uma poderosa lembrança dos horrores de uma guerra, um testemunho eloquente do espírito humano. Assim podemos descrever os relatos feitos por Anne em seu diário.",
    modalId: "modal3",
    alt: "Capa do livro O Diário de Anne Frank",
    link: "#"
  },
  {
    imagem: "SRC/LivroGênerosImg/Susy e as águas - vivas.png",
    titulo: "Susy e as águas - vivas",
    descrição2:"",
    descrição: "Este livro tem uma história que aborda temas sensíveis como perdas, luto, aceitação, amizades e seus possíveis fins trágicos. Tem uma narrativa delicada e comovente, nos fazendo mergulhar nos pensamentos e sentimentos da jovem Suzy, uma garota de doze anos que está enfrentando a morte repentina de sua ex melhor amiga.",
    modalId: "modal4",
    alt: "Capa do livro Susy e as águas - vivas",
    link: "#"
  },
  {
    imagem: "SRC/LivroGênerosImg/Shakespeare 1.png",
    label: "Abrir modal do livro Shakespeare",
    titulo: "Shakespeare",
    descrição2:"",
    descrição: "As peças históricas de Shakespeare, também conhecidas como ''Histórias'', são um dos géneros dramáticos mais importantes do autor. Elas retratam a história da Inglaterra, focando frequentemente em eventos e personagens reais, embora Shakespeare tenha tomado algumas liberdades criativas para fins dramáticos.",
    modalId: "modal5",
    alt: "Capa do livro Shakespeare",
    link: "#"
  },
  {
    imagem: "SRC/LivroGênerosImg/O Gato Preto 1.png",
    label: "Abrir modal do livro O Gato Preto",
    titulo: "O Gato Preto",
    descrição2:"",
    descrição: "O Gato Preto é um dos mais perturbadores contos de Edgar Allan Poe. Um homem que adora animais se transforma em um perverso ser, cometendo atrocidades com seu gato de estimação. A insanidade é amplificada pelo consumo exagerado de álcool, o que o torna cada vez mais violento.",
    modalId: "modal6",
    alt: "Capa do livro O Gato Preto",
    link: "#"
  },
  {
    imagem: "SRC/LivroGênerosImg/O fanstástico mistério de Feiurinha 1.png",
    label: "Abrir modal do livro O fanstástico mistério de Feiurinha",
    titulo: "O fanstástico mistério de Feiurinha",
    descrição2:"",
    descrição: "explora o que acontece após o ''felizes para sempre'' dos contos de fadas, questionando a ideia de que a felicidade reside apenas no casamento e na rotina familiar. A história acompanha Branca de Neve e outras princesas em busca de Feiurinha, uma princesa cujo conto ainda não foi escrito, e que desapareceu.",
    modalId: "modal7",
    alt: "Capa do livro O fanstástico mistério de Feiurinha",
    link: "#"
  },
];

const livrosCarroselMaisPedido = [
  {
    imagem: "SRC/LivroGênerosImg/Sonic The Hedgehog – Volume 1 Depois da guerra.png",
    titulo: "Sonic The Hedgehog – Volume 1 Depois da guerra",
    descrição2:"Sonic The Hedgehog – Volume 1: Depois da guerra - Acompanha pôster e marcador! - Livro novo!",
    descrição: "Dr. Eggman, o gênio do mal, foi vencido – mas o trabalho de Sonic ainda não acabou! No rastro de sua última e épica batalha, bots estão à solta e atacando pelas vilas mundo afora. Para derrotá-los, Sonic vai precisar de ajuda dos amigos Tails, Knuckles e Amy, assim como de novos e incríveis aliados. Correndo velozmente das telas dos games para as páginas dos quadrinhos, o ouriço azul tão querido por todos nós embala essa nova série trazida com exclusividade pela Geektopia, com tradução do grande Érico Assis. Um quadrinho com a excelência de sempre, feito com carinho para todas as gerações de leitores",
    label: "Abrir modal do Gibis Sonic The Hedgehog – Volume 1 Depois da guerra",
    modalId: "modal8",
    alt: "Capa do livro Sonic The Hedgehog – Volume 1 Depois da guerra",
    link: "https://grabber.zone/comics/idw-sonic-portugues/volume-1/"
  },
  {
    imagem: "SRC/LivroGênerosImg/Sonic The Hedgehog – Volume 2 A sina do Dr. Eggman.png",
    titulo: "Sonic The Hedgehog – Volume 2 A sina do Dr. Eggman",
    descrição2:"Sonic The Hedgehog – Volume 1: Depois da guerra - Acompanha pôster e marcador! - Livro novo!",
    descrição: "Dr. Eggman, o gênio do mal, foi vencido – mas o trabalho de Sonic ainda não acabou! No rastro de sua última e épica batalha, bots estão à solta e atacando pelas vilas mundo afora. Para derrotá-los, Sonic vai precisar de ajuda dos amigos Tails, Knuckles e Amy, assim como de novos e incríveis aliados. Correndo velozmente das telas dos games para as páginas dos quadrinhos, o ouriço azul tão querido por todos nós embala essa nova série trazida com exclusividade pela Geektopia, com tradução do grande Érico Assis. Um quadrinho com a excelência de sempre, feito com carinho para todas as gerações de leitores",
    label: "Abrir modal do Gibis Sonic The Hedgehog – Volume 2 A sina do Dr. Eggman",
    modalId: "modal9",
    alt: "Capa do livro Sonic The Hedgehog – Volume 2 A sina do Dr. Eggman",
    link: "https://grabber.zone/comics/idw-sonic-portugues/volume-2/"
  },
  {
    imagem: "SRC/LivroGênerosImg/eu sou malala.png",
    titulo: "Eu Sou Malala",
    descrição2:"",
    descrição: "O livro acompanha a infância da garota no Paquistão, os primeiros anos de vida escolar, as asperezas da vida numa região marcada pela desigualdade social, as belezas do deserto e as trevas da vida sob o Talibã.",
    label: "Abrir modal do livro Eu Sou Malala",
    modalId: "modal10",
    alt: "Capa do livro Eu Sou Malala",
    link: "#"
  },
  {
    imagem: "SRC/LivroGênerosImg/Diário de uma garota nada popular.png",
    titulo: "Diário de uma garota nada popular",
    descrição2:"",
    descrição: "Uma adolescente atrapalhada e cheia de confissões como Nikki não poderia viver sem seu diário. Mas quando a menina não se lembra onde o deixou, essa emergêencia precisa de uma investigação! Depois de conquistar o público brasileiro, Nikki Maxwell esta de volta com seu Diário de uma garota nada popular.",
    label: "Abrir modal do Diário de uma garota nada popular",
    modalId: "modal11",
    alt: "Capa do livro Diário de uma garota nada popular",
    link: "#"
  },
  {
    imagem: "SRC/LivroGênerosImg/Susy e as águas - vivas.png",
    titulo: "Susy e as águas - vivas",
    descrição2:"",
    descrição: "Este livro tem uma história que aborda temas sensíveis como perdas, luto, aceitação, amizades e seus possíveis fins trágicos. Tem uma narrativa delicada e comovente, nos fazendo mergulhar nos pensamentos e sentimentos da jovem Suzy, uma garota de doze anos que está enfrentando a morte repentina de sua ex melhor amiga.",
    modalId: "modal12",
    alt: "Capa do livro Susy e as águas - vivas",
    link: "#"
  },
  {
    imagem: "SRC/LivroGênerosImg/Shakespeare 1.png",
    label: "Abrir modal do livro Shakespeare",
    titulo: "Shakespeare",
    descrição2:"",
    descrição: "As peças históricas de Shakespeare, também conhecidas como ''Histórias'', são um dos géneros dramáticos mais importantes do autor. Elas retratam a história da Inglaterra, focando frequentemente em eventos e personagens reais, embora Shakespeare tenha tomado algumas liberdades criativas para fins dramáticos.",
    modalId: "modal13",
    alt: "Capa do livro Shakespeare",
    link: "#"
  },
  {
    imagem: "SRC/LivroGênerosImg/O fanstástico mistério de Feiurinha 1.png",
    label: "Abrir modal do livro O fanstástico mistério de Feiurinha",
    titulo: "O fanstástico mistério de Feiurinha",
    descrição2:"",
    descrição: "explora o que acontece após o ''felizes para sempre'' dos contos de fadas, questionando a ideia de que a felicidade reside apenas no casamento e na rotina familiar. A história acompanha Branca de Neve e outras princesas em busca de Feiurinha, uma princesa cujo conto ainda não foi escrito, e que desapareceu.",
    modalId: "modal14",
    alt: "Capa do livro O fanstástico mistério de Feiurinha",
    link: "#"
  },
]