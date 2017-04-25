//Type content recursively in the typewriter
function typeWriter(elm, text, elms) {
  if(text) {
    elm.textContent += text[0];
    setTimeout(function() {
      typeWriter(elm, text.substring(1), elms);
    }, 130 - Math.random() * 100);
  } else if(elms.length > 0) {
    cursorIdle();
    setTimeout(function() {
      removeCursor(elm);
      nextElm(elms);
    }, 1000);
  } else
    cursorIdle();
}

function nextElm(elms) {
  const elm = elms.shift();
  const elmText = elm.getAttribute('data-type');
  addCursor(elm);
  typeWriter(elm, elmText, elms);
}

function addCursor(elm) {
  const cursor = document.createElement(elm.nodeName);
  cursor.textContent = '|';
  cursor.id = 'typeCursor';
  elm.style.display = cursor.style.display = 'inline';
  elm.parentNode.insertBefore(cursor, elm.nextSibling);
}

function removeCursor(elm) {
  document.querySelector("#typeCursor").remove();
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
  const html = document.querySelectorAll(".typewrite");
  let elms = [].slice.call(html);
  nextElm(elms);
});