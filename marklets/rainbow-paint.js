(function() {
  function randColor() {
    var c = '';
    while (c.length < 6) {
      c += (Math.random()).toString(16).substr(-6).substr(-1);
    }
    return "#" + c;
  }

  function paint(element) {
    element.style.color = randColor();
  }

  window.addEventListener("mouseover", function(event) {
    paint(event.target);
  });
})();
