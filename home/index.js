$(document).ready(function(){
  var slideIndex = 0;
  var slides = $(".slideshow img");
  var totalSlides = slides.length;
  var titles = $(".slideshow-title");
  
  function showSlide(index) {
    slides.eq(slideIndex).removeClass("active");
    slideIndex = index;
    if (slideIndex < 0) {
      slideIndex = totalSlides - 1;
    } else if (slideIndex >= totalSlides) {
      slideIndex = 0;
    }
    slides.eq(slideIndex).addClass("active");
    $(".dot").removeClass("active");
    $(".dot").eq(slideIndex).addClass("active");
    titles.removeClass("active");
    titles.eq(slideIndex).addClass("active");
  }

  $(".dot").click(function(){
    var index = $(this).index();
    showSlide(index);
  });

  $(".fa-circle-right").click(function(){
    showSlide(slideIndex + 1);
  });

  $(".fa-circle-left").click(function(){
    showSlide(slideIndex - 1);
  });
});
