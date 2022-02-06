const swiper = new Swiper("#swiper .swiper", {
  // Optional parameters
  direction: "horizontal",
  loop: true,
  slidesPerView: 1,
  spaceBetween: 20,
  speed: 1500,
  autoplay: {
    delay: 3000,
  },
  allowSlideNext: true,
  allowSlidePrev: true,
  breakpoints: {
    600: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      allowSlideNext: true,
      allowSlidePrev: true,
      autoplay: false,
    },
    1000: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      allowSlideNext: true,
      allowSlidePrev: true,
      autoplay: {
        disableOnInteraction: true,
      },
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

  // And if we need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar",
  },
});

const swiper2 = new Swiper("#pricing .swiper", {
  // Optional parameters
  direction: "horizontal",
  loop: true,
  slidesPerView: 1,
  spaceBetween: 20,
  speed: 1500,

  allowSlideNext: true,
  allowSlidePrev: true,
  breakpoints: {
    600: {
      slidesPerView: 1,
      slidesPerGroup: 1,
      autoplay: {
        delay: 3000,
      },
      allowSlideNext: true,
      allowSlidePrev: true,
      autoplay: false,
    },

    1000: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      allowSlideNext: true,
      allowSlidePrev: true,
      autoplay: {
        disableOnInteraction: true,
      },
    },
    1200: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      allowSlideNext: true,
      allowSlidePrev: true,
      autoplay: {
        disableOnInteraction: true,
      },
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

  // And if we need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar",
  },
});
