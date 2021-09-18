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

  // generate random new color
  if (simpleNotRgb) {
    newColor = simpleFlip();
  } else {
    newColor = rgbFlip();
  }

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
