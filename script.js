const colorBtn = document.querySelector("#changeColor");
const body = document.querySelector("#thisIsTheBody");

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
  console.log(newColor);
  body.style.backgroundColor = newColor;
});

function genNewColor() {
  let red = Math.floor(Math.random() * 255);
  let green = Math.floor(Math.random() * 255);
  let blue = Math.floor(Math.random() * 255);
  newColor = String(`rgb(${red}, ${green}, ${blue})`);
  return newColor;
}
