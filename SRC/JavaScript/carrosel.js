// Pegando a UL ou OL onde os livros vão ficar
const carrosel = document.getElementById("carrosel_indicação");

const carroselModal = document.getElementById("carrosel_indicação_modal");

const carroselMaisPedidos = document.getElementById("carrosel_maisPedidos");

const cMaisPedidosModal = document.getElementById("carrosel_maisPedidos_modal");

// PLATAFORMA LEIA

const topicos_lista = document.getElementById("topicos_lista_leia");

// Gerando HTML dinamicamente
livrosCarrosel.forEach(livro => {
  carrosel.innerHTML += `

  <!-- Slide 1 -->
      <div class="swiper-slide">
        <img src="${livro.imagem}"
              class="btn btn-link"
              tabindex="0"
              role="button"
              aria-label="${livro.label}"
              data-bs-toggle="modal"
              data-bs-target="#${livro.modalId}"
              alt="${livro.alt}" />
      </div>
  `;
});

livrosCarroselMaisPedido.forEach(livro => {
    carroselModal.innerHTML += `


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
    
    
    `
});

// Gerando HTML dinamicamente
livrosCarroselMaisPedido.forEach(livro => {
  carroselMaisPedidos.innerHTML += `

  <!-- Slide -->
      <div class="swiper-slide">
        <img src="${livro.imagem}"
              class="btn btn-link"
              tabindex="0"
              role="button"
              aria-label="${livro.label}"
              data-bs-toggle="modal"
              data-bs-target="#${livro.modalId}"
              alt="${livro.alt}" />
      </div>
  `;
});

livrosCarrosel.forEach(livro => {
    cMaisPedidosModal.innerHTML += `


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
    
    
    `
});

plataformaLeia.forEach(leia => {
  topicos_lista.innerHTML += `
  <!--° ano  -->
          <li class="topicos_item ${leia.color}">
              <a href="${leia.link}" class="topicos_link">${leia.topicos_item}</a>
          </li>
  `
});

// ver mais

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