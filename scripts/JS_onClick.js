 //Actions

 function scroll(event) {
  var scrollTo = event.target.id.slice(2).toLowerCase();
  document.getElementById(scrollTo).scrollIntoView({
    behavior: 'smooth'
  });
}

function expand(event) {
  console.log(event.currentTarget);
  var expTarget = document.getElementById('expand' + event.currentTarget.id);
  expTarget.style.height = '300vh';
  expTarget.style.width = '300vh';
}

//Add handlers
function addToScroll() {
  var btns = document.querySelectorAll('button');
  for(var i = 0; i < btns.length; i++)
  	btns[i].addEventListener('click', scroll);
}

function addToExpand() {
  var cols = document.querySelectorAll('.column-item')
  for(var i = 0; i < cols.length; i++)
  	cols[i].addEventListener('click', expand);
}

//Run script
document.addEventListener('DOMContentLoaded', function(event) {
  addToScroll();
  addToExpand();
});