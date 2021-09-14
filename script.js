const colorBtn = document.querySelector("#changeColor");
const body = document.querySelector("#thisIsTheBody");
const label = document.querySelector("#colorName");
const simple = document.querySelector("#simple");
const rgb = document.querySelector("#rgb");
label.textContent = "Color: blueviolet";

// add event listener to button
colorBtn.addEventListener("click", flipColor);

// add event listener to the simple button
simple.addEventListener("click", simpleFlip);

// add event listener to the rgb button
rgb.addEventListener("click", rgbFlip);

function flipColor() {
  let newColor;
  // read and store current background color
  let color = window.getComputedStyle(body);
  let colorNow = color.getPropertyValue("background-color");

  // generate random new color
  newColor = genNewColor();

  // check that new color is different from current color:
  if (newColor === colorNow) {
    newColor = genNewColor();
  }
  // change background color in DOM
  body.style.backgroundColor = newColor;
  // update label in display
  label.textContent = `Color: ${newColor}`;
}

function simpleFlip() {
  // flip among named colors
}

function rgbFlip() {
  // flip amongst rgb colors
}

function genNewColor() {
  let red = Math.floor(Math.random() * 255);
  let green = Math.floor(Math.random() * 255);
  let blue = Math.floor(Math.random() * 255);
  return String(`rgb(${red}, ${green}, ${blue})`);
}
