//island-property-1
let slideIndex_3 = 1;
showSlides_3(slideIndex_3);

// Next/previous controls
function plusSlides_3(n) {
  showSlides_3(slideIndex_3 += n);
}

// Thumbnail image controls
function currentSlide_3(n) {
  showSlides_3(slideIndex_3 = n);
}

function showSlides_3(n) {
  let i;
  let slides = document.getElementsByClassName("property-image-3");
  let dots = document.getElementsByClassName("image-3");

  if (n > slides.length) {slideIndex_3 = 1}
  if (n < 1) {slideIndex_3 = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex_3-1].style.display = "block";
  dots[slideIndex_3-1].className += " active";
}
