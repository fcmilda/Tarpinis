const swiper = new Swiper(".swiper", {
  // Optional parameters
  direction: "horizontal",
  loop: false,
  speed: 1000,
  autoplay: {
    delay: 500,
    disableOnInteraction: false,
  },
  slidesPerView: 1,
  spaceBetween: 20,
  allowSlideNext: true,
  allowSlidePrev: true,
  breakpoints: {
    600: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      allowSlideNext: true,
      allowSlidePrev: true,
      autoplay: {
        delay: 500,
        disableOnInteraction: false,
      },
    },
    1000: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      allowSlideNext: false,
      allowSlidePrev: false,
      //   autoplay: {
      //     disableOnInteraction: true,
      //   },
    },
  },

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
