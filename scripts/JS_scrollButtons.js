 //Actions
const elmPosition = e => {
  const targetId = e.currentTarget.id.slice(2).toLowerCase();
  return document.querySelector('#' + targetId).offsetTop;
}

const scroll = e => {
  e.preventDefault();

  //Set initial positions for scroll calculation
  let scrollPos = window.pageYOffset,
      step = 1,
      dist;

  //Set element position and check if scrolling up or down
  const elmPos = elmPosition(e),
        reverse = scrollPos < elmPos ? 1 : -1;
        startDist = reverse * (elmPos - scrollPos);

  const animateScroll = () => {
    requestID = requestAnimationFrame(animateScroll);
    dist = reverse * (elmPos - scrollPos);

    //Accelerate scrolling and brake at 75% mark
  	if (reverse * scrollPos < elmPos) {
  	  window.scrollTo(0, scrollPos);
  	  scrollPos += reverse * step;
  	  //The steps are set manually, this should be improved for use in a larger project
      if (step < 2 * Math.sqrt(startDist) && dist > startDist / 4) {
  	  	step *= 1.2;
  	  } else if (step > 1 && dist < startDist / 4) {
        step /= 1.1;
      }
    //Finish scroll and stop scrolling
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