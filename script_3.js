//peachland-property-1
let slideIndex_6 = 1;
showSlides_6(slideIndex_6);
// Next/previous controls
function plusSlides_6(n) {
  showSlides_6(slideIndex_6 += n);
}
// Thumbnail image controls
function currentSlide_6(n) {
  showSlides_4(slideIndex_4 = n);
}
function showSlides_6(n) {
  let i;
  let slides = document.getElementsByClassName("property-image-6");
  let dots = document.getElementsByClassName("image-6");
  if (n > slides.length) {slideIndex_6 = 1}
  if (n < 1) {slideIndex_6 = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex_6-1].style.display = "block";
  dots[slideIndex_6-1].className += " active";
}
let x = 0;
console.log(x)
function menu_toggle() {
    if(x%2==0) {
        scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
        window.onscroll = function() {
            window.scrollTo(scrollLeft, scrollTop);
        };
    } else {
        window.onscroll = function() {};
    }
    x++;
}