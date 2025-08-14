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
                item.style.display = 'flex';
                hasResults = true;
            } else {
                item.style.display = 'none';
            }
        });

        noResults.style.display = hasResults ? 'none' : 'block';
    } else {
        items.forEach(item => item.style.display = 'flex');
        noResults.style.display = 'none';
    }
});

function formatString(value) {
    return value.toLowerCase().trim().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
}


// FILTRO POR GÊNERO
function mostrarTodos() {
    document.querySelectorAll('.item').forEach(livro => {
        livro.style.display = 'flex';
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
            livro.style.display = 'flex';
        } else {
            livro.style.display = 'none';
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