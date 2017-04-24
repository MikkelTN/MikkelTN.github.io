//Type content recursively in the typewriter
function typeWriter(elm, text) {
  if(text) {
    elm.textContent += text[0];
    setTimeout(function() {
      typeWriter(elm, text.substring(1));
    }, 200 - Math.random() * 150);
  } else
    cursorIdle();
}

function addCursor(elm) {
  const cursor = document.createElement(elm.nodeName);
  cursor.textContent = '|';
  cursor.id = 'typeCursor';
  elm.style.display = cursor.style.display = 'inline';
  elm.parentNode.insertBefore(cursor, elm.nextSibling);
}

function cursorIdle() {
  const cursor = document.querySelector('#typeCursor');
  cursor.style.opacity = 0;
  setInterval(function() {
  if(cursor.style.opacity == 0)
    cursor.style.opacity = 1;
  else
    cursor.style.opacity = 0;
  }, 500);
}

document.addEventListener('DOMContentLoaded', function(event) {
  const elm = document.querySelector(".typewrite");
  const elmText = elm.textContent;
  elm.textContent = '';
  addCursor(elm);
  typeWriter(elm, elmText);
});





