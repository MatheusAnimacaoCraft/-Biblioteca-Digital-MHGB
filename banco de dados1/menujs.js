const swiper = new Swiper(".swiper", {
  spaceBetween: 10,
  slidesPerView: 3,
  loop: true, // para rolar continuamente
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
