document.addEventListener('DOMContentLoaded', function(event) {
  var lastScrollPosition = 0;
  var vis;
  var ticking = false;
  var top = document.querySelector("#header");

  function onScroll(el, pos) {
    if(pos > 100 && vis != true) {
      el.style.opacity = 1;
    }
    else if (pos < 100 && vis != false) {
  	  el.style.opacity = 0;
  	}
  }

  window.addEventListener('scroll', function(event) {
    lastPosition = window.scrollY;
    if(!ticking) {
  	  window.requestAnimationFrame(function() {
  	  onScroll(top, lastPosition);
  	  ticking = false;
      });
    }
    ticking = true;
  }, false);
});