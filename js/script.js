
jQuery(function ($) { // この中であればWordpressでも「$」が使用可能になる
  // start
  const swiper = new Swiper('.swiper', {
    loop: true,
    autoplay: {
      delay: 1000,
      disableOnInteraction: false,
    },
  });
  // end
});
