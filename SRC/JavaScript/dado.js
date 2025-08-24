// "Banco de dados" dos livros em JS
const livros = [
  {
    imagem: "SRC/LivroGênerosImg/eu sou malala.png",
    titulo: "Eu Sou Malala",
    autor: "Malala com Patricia McCormick",
    generos: "Biografia",
    modalId: "modal1",
    descrição2:"",
    descrição: "O livro acompanha a infância da garota no Paquistão, os primeiros anos de vida escolar, as asperezas da vida numa região marcada pela desigualdade social, as belezas do deserto e as trevas da vida sob o Talibã.",
    link: "https://annacrafts.wordpress.com/wp-content/uploads/2014/10/malala-yousafzai-eu-sou-malala.pdf"
  },
  {
    imagem: "SRC/LivroGênerosImg/Diário de uma garota nada popular.png",
    titulo: "Diário de uma garota nada popular",
    autor: "Rachel Rénée Russell",
    generos: "ficção",
    modalId: "modal2",
    descrição2:"",
    descrição: "Uma adolescente atrapalhada e cheia de confissões como Nikki não poderia viver sem seu diário. Mas quando a menina não se lembra onde o deixou, essa emergêencia precisa de uma investigação! Depois de conquistar o público brasileiro, Nikki Maxwell esta de volta com seu Diário de uma garota nada popular.",
    link: "https://cdn.bookey.app/files/pdf/book/pt/diario-de-uma-garota-nada-popular---vol-3.pdf"
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
    link: "https://annacrafts.wordpress.com/wp-content/uploads/2014/10/malala-yousafzai-eu-sou-malala.pdf"
  },
  {
    imagem: "SRC/LivroGênerosImg/Diário de uma garota nada popular.png",
    titulo: "Diário de uma garota nada popular",
    descrição2:"",
    descrição: "Uma adolescente atrapalhada e cheia de confissões como Nikki não poderia viver sem seu diário. Mas quando a menina não se lembra onde o deixou, essa emergêencia precisa de uma investigação! Depois de conquistar o público brasileiro, Nikki Maxwell esta de volta com seu Diário de uma garota nada popular.",
    label: "Abrir modal do Diário de uma garota nada popular",
    modalId: "modal2",
    alt: "Capa do livro Diário de uma garota nada popular",
    link: "https://cdn.bookey.app/files/pdf/book/pt/diario-de-uma-garota-nada-popular---vol-3.pdf"
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
    link: "#https://annacrafts.wordpress.com/wp-content/uploads/2014/10/malala-yousafzai-eu-sou-malala.pdf"
  },
  {
    imagem: "SRC/LivroGênerosImg/Diário de uma garota nada popular.png",
    titulo: "Diário de uma garota nada popular",
    descrição2:"",
    descrição: "Uma adolescente atrapalhada e cheia de confissões como Nikki não poderia viver sem seu diário. Mas quando a menina não se lembra onde o deixou, essa emergêencia precisa de uma investigação! Depois de conquistar o público brasileiro, Nikki Maxwell esta de volta com seu Diário de uma garota nada popular.",
    label: "Abrir modal do Diário de uma garota nada popular",
    modalId: "modal11",
    alt: "Capa do livro Diário de uma garota nada popular",
    link: "https://cdn.bookey.app/files/pdf/book/pt/diario-de-uma-garota-nada-popular---vol-3.pdf"
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
];

const plataformaLeia = [
  // 6 ano
  {
    color: "sexto_ano",
    topicos_item: "Anne de Green Gables, Lucy Maud Montgomery 6° ano",
    link: "https://livros.arvore.com.br/biblioteca/livro/anne-de-green-gables-e8217e9f-f898-49fa-bf2e-3e65122baeb4",
  },
  {
    color: "sexto_ano",
    topicos_item: "O jardim secreto, Frances Hodgson Bernett 6° ano",
    link: "https://livros.arvore.com.br/biblioteca/livro/o-jardim-secreto-frances-hodgson-bernett",
  },
  {
    color: "sexto_ano",
    topicos_item: "Diário de um banana - vol. 01, Jeff Kinney 6° ano",
    link: "https://livros.arvore.com.br/biblioteca/livro/jeff-kinney-diario-de-um-banana"
  },
  {
    color: "sexto_ano",
    topicos_item: "Malala, a menina que queria ir para a escola, Adriana Carranca 6° ano",
    link: "https://livros.arvore.com.br/biblioteca/livro/adriana-carranca-bruna-assis-brasil-malala-a-menina-que-queria-ir-para-a-escola"
  },
  // 7 ano
  {
    color: "setimo_ano",
    topicos_item: "Harry Potter e a Pedra Filosofal, J.K. Rowling, Lia Wyler 7° ano",
    link: "https://livros.arvore.com.br/biblioteca/livro/harry-potter-e-a-pedra-filosofal"
  },
  {
    color: "setimo_ano",
    topicos_item: "Sombra e Ossos, Leigh Bardugo 7° ano",
    link: "https://livros.arvore.com.br/biblioteca/livro/leigh-bardugo-eric-novello-sombra-e-ossos"
  },
  {
    color: "setimo_ano",
    topicos_item: "Os meninos da rua Paulo, Ferenc Molnár 7° ano",
    link: "https://livros.arvore.com.br/biblioteca/livro/os-meninos-da-rua-paulo-3c2c18aa-ffe3-473b-b3eb-d16e4425b37a"
  },
  {
    color: "setimo_ano",
    topicos_item: "O jardim secreto, Frances Hodgson Bernett 7° ano",
    link: "https://livros.arvore.com.br/biblioteca/livro/o-jardim-secreto-frances-hodgson-bernett",
  },
  // 8 ano
  {
    color: "oitavo_ano",
    topicos_item: "A Revolução dos Bichos, George Orwell 8° ano",
    link: "https://livros.arvore.com.br/biblioteca/livro/a-revolucao-dos-bichos-01a51d26-c12c-41e5-8f65-db1c5c9b82c0",
  },
  {
    color: "oitavo_ano",
    topicos_item: "O menino que descobriu o vento, William Kamkwamba, Bryan Mealer 8° ano",
    link: "https://livros.arvore.com.br/biblioteca/livro/william-kamkwamba-bryan-mealer-eliana-rocha-anna-hymas-o-menino-que-descobriu-o-vento",
  },
  {
    color: "oitavo_ano",
    topicos_item: "Mulherzinhas, Louisa May Alcott 8° ano",
    link: "https://livros.arvore.com.br/biblioteca/livro/mulherzinhas-louisa-may-alcott",
  },
  {
    color: "oitavo_ano",
    topicos_item: "Jeremias: Alma, Rafael Calça, Jefferson Costa 8° ano",
    link: "https://livros.arvore.com.br/biblioteca/livro/jeremias-alma",
  },
  // 9 ano
  {
    color: "nono_ano",
    topicos_item: "1984, George Orwell 9° ano",
    link: "https://livros.arvore.com.br/biblioteca/livro/geroge-orwell-1984",
  },
  {
    color: "nono_ano",
    topicos_item: "O alienista, Machado de Assis 9° ano",
    link: "https://livros.arvore.com.br/biblioteca/livro/o-alienista-7561ed4d-4205-4675-a21f-4eb0e97ed2da",
  },
  {
    color: "nono_ano",
    topicos_item: "A vida não é útil, Ailton Krenak 9° ano",
    link: "https://livros.arvore.com.br/biblioteca/livro/ailton-krenak-a-vida-nao-e-util",
  },
  {
    color: "nono_ano",
    topicos_item: "A menina que roubava livros, Markus Zusak 9° ano",
    link: "https://livros.arvore.com.br/biblioteca/livro/a-menina-que-roubava-livros",
  },
  // 1 ano EM
  {
    color: "primeiro_ano",
    topicos_item: "A menina que roubava livros, Markus Zusak 1° ano EM",
    link: "https://livros.arvore.com.br/biblioteca/livro/a-menina-que-roubava-livros",
  },
  {
    color: "primeiro_ano",
    topicos_item: "Campo Geral, João Guimarães Rosa 1° ano EM",
    link: "https://livros.arvore.com.br/biblioteca/livro/joao-guimaraes-rosa-campo-geral",
  },
  {
    color: "primeiro_ano",
    topicos_item: "O Ateneu, Raul Pompeia 1° ano EM",
    link: "https://livros.arvore.com.br/biblioteca/livro/o-ateneu",
  },
  {
    color: "primeiro_ano",
    topicos_item: "O jardim secreto, Frances Hodgson Bernett 1° ano EM",
    link: "https://livros.arvore.com.br/biblioteca/livro/o-jardim-secreto-frances-hodgson-bernett",
  },
  // 2 ano EM
  {
    color: "segundo_ano",
    topicos_item: "Cartas para minha avó, Djamila Ribeiro 2° ano EM",
    link: "https://livros.arvore.com.br/biblioteca/livro/djamila-ribeiro-cartas-para-minha-avo",
  },
  {
    color: "segundo_ano",
    topicos_item: "Prosas seguidas de Odes mínimas, José Paulo Paes 2° ano EM",
    link: "https://livros.arvore.com.br/biblioteca/livro/jose-paulo-paes-elisa-von-randow-prosas-seguidas-de-odes-minimas-edicao-de-bolso",
  },
  {
    color: "segundo_ano",
    topicos_item: "Triste fim de Policarpo Quaresma, Lima Barreto 2° ano EM",
    link: "https://livros.arvore.com.br/biblioteca/livro/triste-fim-de-policarpo-quaresma",
  },
  {
    color: "segundo_ano",
    topicos_item: "Paulicéia desvairada, Mário de Andrade 2° ano EM",
    link: "https://livros.arvore.com.br/biblioteca/livro/pauliceia-desvairada",
  },
  // 3 ano EM
  {
    color: "terceiro_ano",
    topicos_item: "Balada de amor ao vento, Paulina Chiziane,Angelo Abu 3° ano EM",
    link: "https://livros.arvore.com.br/biblioteca/livro/paulina-chiziane-angelo-abu-balada-de-amor-ao-vento",
  },
  {
    color: "terceiro_ano",
    topicos_item: "Morangos mofados, Caio Fernando Abreu 3° ano EM",
    link: "https://livros.arvore.com.br/biblioteca/livro/caio-fernando-abreu-morangos-mofados",
  },
  {
    color: "terceiro_ano",
    topicos_item: "O cortiço, Aluísio Azevedo 3° ano EM",
    link: "https://livros.arvore.com.br/biblioteca/livro/aluisio-azevedo-o-cortico",
  },
  {
    color: "terceiro_ano",
    topicos_item: "Olhos d'água, Conceição Evaristo 3° ano EM",
    link: "https://livros.arvore.com.br/biblioteca/livro/conceicao-evaristo-olhos-d-agua",
  },
];