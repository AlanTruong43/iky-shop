$(document).ready(function(){
    var slideIndex = 0;
    var slides = $(".slideshow img");
    var totalSlides = slides.length;
  
    $(".fa-circle-right").click(function(){
      slides.eq(slideIndex).removeClass("active");
      slideIndex++;
      if (slideIndex === totalSlides) {
        slideIndex = 0;
      }
      slides.eq(slideIndex).addClass("active");
    });
  
    $(".fa-circle-left").click(function(){
      slides.eq(slideIndex).removeClass("active");
      slideIndex--;
      if (slideIndex < 0) {
        slideIndex = totalSlides - 1;
      }
      slides.eq(slideIndex).addClass("active");
    });
  });
  