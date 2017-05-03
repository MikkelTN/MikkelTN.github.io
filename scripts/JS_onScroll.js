var vis;

function fadeBtn(el, pos) {
  if(pos > 150 && vis !== true) {
    el.style.opacity = 1;
  }
  else if (pos < 150 && vis !== false) {
	  el.style.opacity = 0;
	}
}

document.addEventListener('DOMContentLoaded', function(event) {

  var lastScrollPosition = 0;
  var ticking = false;
  var top = document.querySelector("#toHeader");
  
  window.addEventListener('scroll', function(event) {
    lastPosition = window.scrollY;
    if(!ticking) {
  	  window.requestAnimationFrame(function() {
  	  fadeBtn(top, lastPosition);
  	  ticking = false;
      });
    }
    ticking = true;
  }, false);
});