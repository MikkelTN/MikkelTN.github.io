 //Actions
 function scroll(e) {
  const scrollTo = e.target.id.slice(2).toLowerCase();
  document.getElementById(scrollTo).scrollIntoView({
    behavior: 'smooth'
  });
}

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