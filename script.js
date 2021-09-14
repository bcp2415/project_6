const colorBtn = document.querySelector("#changeColor");
const body = document.querySelector("#thisIsTheBody");
const label = document.querySelector("#colorName");
const simple = document.querySelector("#simple");
const rgb = document.querySelector("#rgb");
label.textContent = "Color: blueviolet";

// add event listener to button
colorBtn.addEventListener("click", function () {
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
  // call fcn to change background color in DOM
  body.style.backgroundColor = newColor;
  // update label in display
  label.textContent = `Color: ${newColor}`;
});

// add event listener to the simple button
simple.addEventListener("click", function () {
  // do some stuff
});

// add event listener to the rgb button
rgb.addEventListener("click", function () {
  // do other stuff
});

function genNewColor() {
  let red = Math.floor(Math.random() * 255);
  let green = Math.floor(Math.random() * 255);
  let blue = Math.floor(Math.random() * 255);
  return String(`rgb(${red}, ${green}, ${blue})`);
}
