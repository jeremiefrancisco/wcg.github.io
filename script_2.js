//kelowna-property-1
let slideIndex_4 = 1;
showSlides_4(slideIndex_4);
// Next/previous controls
function plusSlides_4(n) {
  showSlides_4(slideIndex_4 += n);
}
// Thumbnail image controls
function currentSlide_4(n) {
  showSlides_4(slideIndex_4 = n);
}

function showSlides_4(n) {
  let i;
  let slides = document.getElementsByClassName("property-image-4");
  let dots = document.getElementsByClassName("image-4");
  if (n > slides.length) {slideIndex_4 = 1}
  if (n < 1) {slideIndex_4 = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex_4-1].style.display = "block";
  dots[slideIndex_4-1].className += " active";
}

//kelowna-property-2
let slideIndex_5 = 1;
showSlides_5(slideIndex_5);
// Next/previous controls
function plusSlides_5(n) {
  showSlides_5(slideIndex_5 += n);
}
// Thumbnail image controls
function currentSlide_5(n) {
  showSlides_5(slideIndex_5 = n);
}
function showSlides_5(n) {
  let i;
  let slides = document.getElementsByClassName("property-image-5");
  let dots = document.getElementsByClassName("image-5");
  if (n > slides.length) {slideIndex_5 = 1}
  if (n < 1) {slideIndex_5 = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex_5-1].style.display = "block";
  dots[slideIndex_5-1].className += " active";
}
