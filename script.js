let colorBtn = document.querySelector("#changeColor");
let colorNow = window
  .getComputedStyle(html)
  .getPropertyValue("background-color");
console.log(colorNow);

// add event listener to button
colorBtn.addEventListener("click", function () {
  // read and store current background color
  // generate random new color
  // call fcn to change background color in DOM
});
