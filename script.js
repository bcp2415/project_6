const colorBtn = document.querySelector("#changeColor");
const body = document.querySelector("#thisIsTheBody");
const label = document.querySelector("#colorName");
const simple = document.querySelector("#simple");
const rgb = document.querySelector("#rgb");
const simpleColors = [
  "black",
  "silver",
  "gray",
  "white",
  "maroon",
  "red",
  "purple",
  "fuchsia",
  "green",
  "lime",
  "olive",
  "yellow",
  "navy",
  "blue",
  "teal",
  "aqua",
];

const simpleHex = [
  "#000000",
  "#c0c0c0",
  "#808080",
  "#ffffff",
  "#800000",
  "#ff0000",
  "#800080",
  "#ff00ff",
  "#008000",
  "#00ff00",
  "#808000",
  "#ffff00",
  "#000080",
  "#0000ff",
  "#008080",
  "#00ffff",
];
let simpleNotRgb = true;
label.textContent = "Color: blueviolet";

// add event listener to button
colorBtn.addEventListener("click", flipColor);

// add event listener to the simple button
simple.addEventListener("click", function () {
  simpleNotRgb = true;
});

// add event listener to the rgb button
rgb.addEventListener("click", function () {
  simpleNotRgb = false;
});

function flipColor() {
  let newColor;
  // read and store current background color
  let color = window.getComputedStyle(body);
  let colorNow = color.getPropertyValue("background-color");
  console.log(colorNow);

  // generate random new color
  if (simpleNotRgb) {
    newColor = simpleFlip();
  } else {
    newColor = rgbFlip();
  }
  console.log(newColor);

  // check that new color is different from current color:
  // needs fixing --- still calls genNewColor, which no longer exists; this function does more than 1 thing!
  if (newColor === colorNow) {
    if (simpleNotRgb) {
      newColor = simpleFlip();
    } else newColor = rgbFlip();
  }
  // change background color in DOM
  body.style.backgroundColor = newColor;
  // update label in display
  label.textContent = `Color: ${newColor}`;
}

function simpleFlip() {
  // flip among named colors
  let newNamedColor = Math.floor(Math.random() * 16);
  return simpleColors[newNamedColor];
}

function rgbFlip() {
  // flip amongst rgb colors
  let red = Math.floor(Math.random() * 255);
  let green = Math.floor(Math.random() * 255);
  let blue = Math.floor(Math.random() * 255);
  return String(`rgb(${red}, ${green}, ${blue})`);
}

function hexToRgb(hexColor) {
  // convert hex value received as a string to an array w/ 3 members
  // convert each 2-digit value to a decimal number from 0-255
  // assemble string to return:  'rgb(r, g, b)'
  return redGreenBlueValue;
}
