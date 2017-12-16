// Gives a random color to the element specified as a parameter
function assignRandomColor() {
  var randomColor = 'rgb(' + random(0,255) + ',' + random(0,255) + ',' + random(0,255) + ')';
  document.body.style.background = randomColor;
};

// Returns a random number between and incl parameters min and max
function random(min,max) {
  var num = Math.floor(Math.random()*(max-min)) + min;
  return num;
};

function changeFontColor() {
  var randomColor = 'rgb(' + random(0,255) + ',' + random(0,255) + ',' + random(0,255) + ')';
  document.getElementById('hi').style.color = randomColor;
};

window.addEventListener('load', changeFontColor);
setInterval(changeFontColor, 4000);
