const colorBtn = document.querySelector("#changeColor");
const body = document.querySelector("#thisIsTheBody");

// add event listener to button
colorBtn.addEventListener("click", function () {
  // read and store current background color

  let color = window.getComputedStyle(body);
  let colorNow = color.getPropertyValue("background-color");
  console.log(colorNow);

  // generate random new color
  // call fcn to change background color in DOM
});
