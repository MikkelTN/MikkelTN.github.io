function onHover() {
  const cols = document.querySelectorAll('.column-item');
  for(let i = 0; i < cols.length; i++) {
    cols[i].addEventListener('mouseover', function(event) {
      const logo = cols[i].querySelector('i');
      logo.style.fontSize = '4rem';
    });
    cols[i].addEventListener('mouseout', function(event) {
      const logo = cols[i].querySelector('i');
      logo.style.fontSize = '3rem';
    });
  }
}

document.addEventListener('DOMContentLoaded', function(event) {
  onHover();
});