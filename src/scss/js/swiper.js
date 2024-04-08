var swiper = new Swiper(".swiper", {
    loop: true, 
    slidesPerView: 1,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },

    navigation: {
        nextEl: ".swiper-arrow-next",
        prevEl: ".swiper-arrow-prev",
    },

    // breakpoints: {
    //   320: {
    //     slidesPerView: 1,
    //     spaceBetween: 20,
    //   },
    //   640: {
    //     slidesPerView: 2,
    //     spaceBetween: 30,
    //   },
    //   1024: {
    //     slidesPerView: 3,
    //     spaceBetween: 30,
    //   },
    // },
  });

