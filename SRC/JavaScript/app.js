// Pegando a UL ou OL onde os livros vão ficar
const lista = document.getElementById("lista-livros");


// Gerando HTML dinamicamente
livros.forEach(livro => {
  lista.innerHTML += `
  
    <li class="item" data-bs-toggle="modal" data-bs-target="#${livro.modalId}">
  <div class="item-imagem">
    <img class="livro__imagem" src="${livro.imagem}" alt="${livro.titulo}">
  </div>
  <div class="item-content">
    <span class="livro__categoria">📖 Livro</span>
    <h3 class="livro__titulo">${livro.titulo}</h3>
    <p class="livro__autor">${livro.autor}</p>
    <span class="livro__generos">GÊNEROS ${livro.generos}</span>
  </div>
</li>

<!-- Modal -->


    <div class="modal fade" id="${livro.modalId}" tabindex="-1" aria-labelledby="modal1Title" aria-hidden="true">
  <div class="modal-dialog modal-lg">
    <div class="modal-content">

      <div class="modal-header">
        <h5 class="modal-title descrição_titulo" id="modal1Title">${livro.titulo}</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Fechar modal"></button>
      </div>

      <div class="modal-body">
        <img src="${livro.imagem}" class=class="img-fluid w-100" alt="Eu Sou Malala">
        <p class="descrição_titulo">${livro.descrição2}</p>
        <br>
        <p class="descrição_titulo descricao-curta">${livro.descrição.substring(0, 120)}...</p>
        <p class="descrição_titulo descricao-completa" style="display:none;">${livro.descrição}</p>
        <button class="btn btn-link ver-mais-modal">Ver mais</button>
      </div>

      <div class="modal-footer">
        <a href="${livro.link}" class="btn btn-primary" target="_blank"> <i class="bi bi-book"></i> Ler</a>
        <!-- 
        <a href="https://github.com/MatheusAnimacaoCraft/o-sliding-puzzle-3x3-n-meros" class="btn btn-secondary" target="_blank">Ver código do projeto</a> -->
      </div>

    </div>
  </div>
</div>
  `;
});
