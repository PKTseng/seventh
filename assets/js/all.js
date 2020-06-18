"use strict";

var swiper = new Swiper(".swiper-container", {
  slidesPerView: 3,
  spaceBetween: 30,
  slidesPerGroup: 3,
  loop: true,
  loopFillGroupWithBlank: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  },
  autoplay: {
    delay: 2500,
    disableOnInteraction: false
  },
  breakpoints: {
    576: {
      slidesPerView: 1,
      spaceBetween: 10
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 20
    },
    996: {
      slidesPerView: 3,
      spaceBetween: 40
    }
  }
});
AOS.init({
  once: true
});
//# sourceMappingURL=all.js.map
