// BUSCA
const searchInput = document.getElementById('search');

searchInput.addEventListener('input', (event) => {
    const value = formatString(event.target.value);

    const items = document.querySelectorAll('.items .item');
    const noResults = document.getElementById('no_results');

    let hasResults = false;

    if (value != '') {
        items.forEach(item => {
            const itemTitle = item.querySelector('.livro__titulo').textContent;
            const itemAuthor = item.querySelector('.livro__autor').textContent;

            if(formatString(itemTitle).includes(value) || formatString(itemAuthor).includes(value)) {
                item.classList.remove('oculto');
                hasResults = true;
            } else {
                item.classList.add('oculto');
            }
        });

        noResults.style.display = hasResults ? 'none' : 'block';
    } else {
        items.forEach(item => item.classList.remove('oculto'));
        noResults.style.display = 'none';
    }
});

function formatString(value) {
    return value.toLowerCase().trim().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
}

// FILTRO POR GÊNERO
function mostrarTodos() {
    document.querySelectorAll('.item').forEach(livro => {
        livro.classList.remove('oculto');
    });
}

function filtrarPorGenero(genero) {
    if (genero.toLowerCase() === 'todos') {
        mostrarTodos();
        return;
    }
    document.querySelectorAll('.item').forEach(livro => {
        const generoLivro = livro.querySelector('.livro__generos').textContent.replace('GÊNEROS', '').trim().toLowerCase();
        if (generoLivro.includes(genero.toLowerCase())) {
            livro.classList.remove('oculto');
        } else {
            livro.classList.add('oculto');
        }
    });
}

// Liga os links do menu aos filtros
document.querySelectorAll('.lista_menu_link').forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();
        const generoSelecionado = e.target.textContent.trim();
        filtrarPorGenero(generoSelecionado);
    });
});



document.addEventListener("click", e => {
  if (e.target.classList.contains("ver-mais-modal")) {
    const modal = e.target.closest(".modal-body");
    const completa = modal.querySelector(".descricao-completa");
    const curta = modal.querySelector(".descricao-curta");

    if (completa.style.display === "none") {
      completa.style.display = "block";
      curta.style.display = "none";
      e.target.textContent = "Ver menos";
    } else {
      completa.style.display = "none";
      curta.style.display = "block";
      e.target.textContent = "Ver mais";
    }
  }
});