var swiper = new Swiper('.programs-slide', {
    pagination: false,
    navigation: {
      nextEl: '.programs-slide .swiper-button-next',
      prevEl: '.programs-slide .swiper-button-prev',
    },
    effect: "flipEffect",
    slidesOffsetBefore: 0,
    speed: 1000,
    flipEffect: {
      rotate: 0,
      stretch: -10,
      depth: 100,
      modifier: 3,
      slideShadows: !1
    },
    loop: true,
    lazy: true,
    
  });