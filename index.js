let x = 0;
console.log(x)
function menu_toggle() {
    if(x%2==0) {
        document.getElementById("footer-0").style.visibility = 'hidden';
        document.getElementById("footer-1").style.visibility = 'hidden';
        document.getElementById("img-slideshow").style.visibility = 'hidden';
        document.getElementById("slideshow-header").style.visibility = 'hidden';
        document.getElementsById("menu-set").style.visibility = 'hidden';
    } else {
        document.getElementById("footer-0").style.visibility = 'visible';
        document.getElementById("footer-1").style.visibility = 'visible';
        document.getElementById("img-slideshow").style.visibility = 'visible';
        document.getElementById("slideshow-header").style.visibility = 'visible';
        document.getElementById("menu-set").style.visibility = 'visible';
    }
    x++;
}