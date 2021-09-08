let colorBtn = document.querySelector("#changeColor");
let screen = document.querySelector("#thisIsTheBody");
let colorNow = window.getComputedStyle(screen);
console.log(colorNow.getPropertyValue("background-color"));

// add event listener to button
colorBtn.addEventListener("click", function () {
  // read and store current background color
  // generate random new color
  // call fcn to change background color in DOM
});
