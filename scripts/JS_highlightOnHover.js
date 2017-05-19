//Mouseenter
const hoverIn = e => {
  const logo = e.currentTarget.querySelector('i');
  logo.classList.add('hover');
}

//Mouseleave
const hoverOut = e => {
  const logo = e.currentTarget.querySelector('i');
  logo.classList.remove('hover');
}

//Add handlers
const addHover = () => {
  const cols = document.querySelectorAll('.column-item');
  for(let i = 0; i < cols.length; i++) {
    cols[i].addEventListener('mouseover', hoverIn);
    cols[i].addEventListener('mouseout', hoverOut);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  addHover();
});