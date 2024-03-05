var i = 0;
var txt = "It appears that you haven't been redirected. You may have nothing in your history for you to go back to."; /* The text */
var speed = 25; /* The speed/duration of the effect in milliseconds */

function typeWriter() {
  if (i < txt.length) {
    document.getElementById('redirect').innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

function back() {
  window.history.go(-1);
}

function sleep(milliseconds) {
  const date = Date.now();
  let currentDate = null;
  do {
    currentDate = Date.now();
  } while (currentDate - date < milliseconds);
}

window.onload;
sleep(10000);
window.history.go(-1);
