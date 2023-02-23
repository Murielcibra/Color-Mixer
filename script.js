"use strict";
const redRangeInput = document.getElementById("red");
const greenRangeInput = document.getElementById("green");
const blueRangeInput = document.getElementById("blue");
const hexP = document.getElementById("hex-value");

function colors() {
  const red = parseInt(redRangeInput.value);
  const green = parseInt(greenRangeInput.value);
  const blue = parseInt(blueRangeInput.value);
  document.body.style.backgroundColor =
    "rgb(" + red + "," + green + "," + blue + ")";
  hexP.innerHTML = rgbToHex(red, green, blue);
}

function rgbToHex(r, g, b) {
  return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
}

redRangeInput.addEventListener("input", colors);
greenRangeInput.addEventListener("input", colors);
blueRangeInput.addEventListener("input", colors);

colors();
