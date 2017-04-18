//Fade out and fade in
function fadeOut(el) {
  (function fade() {
  	if((el.style.opacity -= .05) < 0)
  	  el.style.display = "none";
  	else
  	  requestAnimationFrame(fade);
  })();
}

function fadeIn(el) {
  el.style.display = "block";

  (function fade() {
    var op = parseFloat(el.style.opacity);
    if((op += .05) <= 1) {
      el.style.opacity = op;
      requestAnimationFrame(fade);
    }
  })();
}

var toTop = document.querySelector(".toTop");

function onScroll(pos) {
  if(pos > 100)
  	fadeIn(toTop);
  else
  	fadeOut(toTop);
}

var lastScrollPosition = 0;
var ticking = false;

window.addEventListener('scroll', function() {
  lastScrollPosition = window.scrollY;
  if(!ticking) {
  	window.requestAnimationFrame(function() {
  	onScroll(lastScrollPosition);
  	ticking = false;
    });
  }
  ticking = true;
}, false);