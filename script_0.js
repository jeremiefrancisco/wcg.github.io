//van-property-0
let slideIndex_0 = 1;
showSlides_0(slideIndex_0);
// Next/previous controls
function plusSlides_0(n) {
  showSlides_0(slideIndex_0 += n);
}
// Thumbnail image controls
function currentSlide_0(n) {
  showSlides_0(slideIndex_0 = n);
}
function showSlides_0(n) {
  let i;
  let slides = document.getElementsByClassName("property-image-0");
  let dots = document.getElementsByClassName("image-0");
  if (n > slides.length) {slideIndex_0 = 1}
  if (n < 1) {slideIndex_0 = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex_0-1].style.display = "block";
  dots[slideIndex_0-1].className += " active";
}

//van-property-1
let slideIndex_1 = 1;
showSlides_1(slideIndex_1);
// Next/previous controls
function plusSlides_1(n) {
  showSlides_1(slideIndex_1 += n);
}
// Thumbnail image controls
function currentSlide_1(n) {
  showSlides_1(slideIndex_1 = n);
}
function showSlides_1(n) {
  let i;
  let slides = document.getElementsByClassName("property-image-1");
  let dots = document.getElementsByClassName("image-1");
  if (n > slides.length) {slideIndex_1 = 1}
  if (n < 1) {slideIndex_1 = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex_1-1].style.display = "block";
  dots[slideIndex_1-1].className += " active";
}

//van-property-2
let slideIndex_2 = 1;
showSlides_2(slideIndex_2);
// Next/previous controls
function plusSlides_2(n) {
  showSlides_2(slideIndex_2 += n);
}
// Thumbnail image controls
function currentSlide_2(n) {
  showSlides_2(slideIndex_2 = n);
}
function showSlides_2(n) {
  let i;
  let slides = document.getElementsByClassName("property-image-2");
  let dots = document.getElementsByClassName("image-2");
  if (n > slides.length) {slideIndex_2 = 1}
  if (n < 1) {slideIndex_2 = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex_2-1].style.display = "block";
  dots[slideIndex_2-1].className += " active";
}
