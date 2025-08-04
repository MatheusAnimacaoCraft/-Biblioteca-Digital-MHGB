const swiper = new Swiper(".swiper", {
  spaceBetween: 10,
  slidesPerView: 3,
  // loop: true, // para rolar continuamente
  pagination: {
    el: ".swiper-pagination",
    type: "bullets",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

document.querySelectorAll('.swiper-slide img').forEach(img => {
    img.addEventListener('keydown', function (e) {
      if (e.key === 'Enter' || e.keyCode === 13) {
        img.click();
      }
    });
  });

  ScrollReveal().reveal('.banner', { delay: 500 });
  ScrollReveal().reveal('.carrosel_titulo', { delay: 500 });
  ScrollReveal().reveal('.topicos', { delay: 500 });
  ScrollReveal().reveal('.pesquisaLivro', { delay: 500 });
  ScrollReveal().reveal('.rodape', { delay: 500 });
