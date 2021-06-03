dragElement(document.getElementById("boxes"));

function dragElement(elmnt) {
  var pos1 = 1, pos2 = 1, pos3 = 1, pos4 = 1;
  if (document.getElementById(elmnt.id + "header")) {
    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
  } else {
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    document.onmouseup = null;
    document.onmousedown = anime({
      targets: 'div.shadow',
      translateY: 13,
      direction: 'reverse',
      easing: 'easeInOutSine'
    })
    document.onmousemove = null;
  }
}
function cock() {
  anime({
    targets: 'div.box',
    opacity: [1, 0],
    easing: 'easeInOutSine'
  })
  anime({
    targets: 'div.shadow',
    opacity: [1, 0],
    easing: 'easeInOutSine'
  })
}
