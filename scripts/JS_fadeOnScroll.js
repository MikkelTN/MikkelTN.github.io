function fadeBtn(elm) {
  const pos = window.scrollY;
  const vis = elm.style.opacity == 1;

  if(pos > 150 && vis !== true) {
    elm.style.opacity = 1;
  }
  else if (pos < 150 && vis !== false) {
	  elm.style.opacity = 0;
	}
}

document.addEventListener('DOMContentLoaded', () => {
  let ticking = false;

  const elm = document.querySelector("#toHeader");

  window.addEventListener('scroll', () => {
    if(!ticking) {
  	  window.requestAnimationFrame(() => {
  	  fadeBtn(elm);
  	  ticking = true;
      });
    }
    ticking = false;
  });
});
