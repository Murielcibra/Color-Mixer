"use strict";
const api = "https://dummy-apis.netlify.app/api/color";
const redRangeInput = document.getElementById("red");
const greenRangeInput = document.getElementById("green");
const blueRangeInput = document.getElementById("blue");
const hexP = document.getElementById("hex-value");
const btnEl = document.getElementById("btnRandom");
btnEl.addEventListener("click", randomColors);
redRangeInput.addEventListener("input", colors);
greenRangeInput.addEventListener("input", colors);
blueRangeInput.addEventListener("input", colors);

colors();

function colors() {
  const red = parseInt(redRangeInput.value);
  const green = parseInt(greenRangeInput.value);
  const blue = parseInt(blueRangeInput.value);
  document.body.style.backgroundColor =
    "rgb(" + red + "," + green + "," + blue + ")";
  hexP.innerText = rgbToHex(red, green, blue);
}

function rgbToHex(r, g, b) {
  return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
}

function randomColors() {
  fetch(api)
    .then((response) => response.json())
    .then((data) => {
      // extracts the r, g, and b values
      const r = data.rgb.r;
      const g = data.rgb.g;
      const b = data.rgb.b;
      // Set the range input values to the fetched RGB values
      redRangeInput.value = r;
      greenRangeInput.value = g;
      blueRangeInput.value = b;
      // Call the colors function to update the background color and hex value
      colors();
    });
}
