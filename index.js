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