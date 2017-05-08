 //Actions
const elmPosition = e => {
  const targetId = e.currentTarget.id.slice(2).toLowerCase();
  return document.querySelector('#' + targetId).offsetTop;
}

const scroll = e => {
  e.preventDefault();

  let scrollPos = window.pageYOffset,
      step = 1;

  const elmPos = elmPosition(e),
        reverse = scrollPos < elmPos ? 1 : -1;

  const animateScroll = () => {
  	requestID = requestAnimationFrame(animateScroll);

  	if (reverse * scrollPos < elmPos) {
  	  window.scrollTo(0, scrollPos);
  	  scrollPos += reverse * step;
  	  if (step < 100) {
  	  	step *= 1.15;
  	  }
  	} else {
  	  window.scrollTo(0, elmPos);
  	  cancelAnimationFrame(requestID);
  	}
  }
  requestAnimationFrame(animateScroll);
};

//Add handlers
function addHandlers() {
  const scrl = document.querySelectorAll('.scroll-btn');
  for(let i = 0; i < scrl.length; i++) {
  	scrl[i].addEventListener('click', scroll);
  }
}

//Run script
document.addEventListener('DOMContentLoaded', function(e) {
  addHandlers();
});