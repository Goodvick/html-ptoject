$(document).ready(function () {
   const slider = $('.main__slider')
   const items = $('.main__item-slider')
   const allSlides = items.length

   let sliderAutoPlay

   const setupSlider = {
      currentSlide: 0,
      autoPlay: true,
      interval: 2500,
   }

   function switchSlide(currentIndex) {
      if (currentIndex >= allSlides) {
         currentIndex = 0;
      } else if (currentIndex < 0) {
         currentIndex = allSlides - 1;
      }
      setupSlider.currentSlide = currentIndex;
      slider.css('transform', `translateX(-${currentIndex * 100}%)`);
   }
   function nextSlide() {
      switchSlide(setupSlider.currentSlide + 1);
   }
   function startAutoPlay() {
      if (setupSlider.autoPlay) {
         sliderAutoPlay = setInterval(nextSlide, setupSlider.interval);
      }
   }
   function stopAutoPlay() {
      clearInterval(sliderAutoPlay);
   }

   $('.main__slider').hover(
      function () {
         stopAutoPlay();
      },
      function () {
         startAutoPlay();
      }
   );

   startAutoPlay();
})