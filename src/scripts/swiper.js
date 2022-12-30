export const swiperConfig = () => {
  const swiper = new Swiper(".swiper", {
    direction: "horizontal",
    loop: true,
    slidesPerView: 4,
    spaceBetween: 16,
    autoHeight: true,

    keyboard: {
      enable: true,
      onlyInViewport: true,
      pageUpDown: true,
    },
    on: {
      init: function () {
        console.log("swiper initialized");
      },
    },

    // Navigation arrows
    navigation: {
      nextEl: ".s-button-next",
      prevEl: ".s-button-prev",
    },
  });
};
