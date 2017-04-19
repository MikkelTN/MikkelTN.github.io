document.addEventListener('DOMContentLoaded', function(event) {
  var button = document.querySelector('.buttons');
  button.addEventListener('click', scroll);
  
  // Special case for fixed position, working on fix
  var top = document.querySelector('#header');
  top.addEventListener('click', function(event) {
    document.querySelector('.header').scrollIntoView({
      behavior: 'smooth'
    });
  });

  function scroll(event) {
  	console.log(event.target.id);
    if(event.target != event.currentTarget) {
      var clicked = event.target.id;
        document.querySelector("." + clicked).scrollIntoView({
    	  behavior: 'smooth'
      });
    }
    event.stopPropagation();
  }
});