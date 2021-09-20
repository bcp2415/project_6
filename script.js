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
    newColor = simpleColors[simpleFlip()];
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
  return Math.floor(Math.random() * 16);
}

function rgbFlip() {
  // flip amongst rgb colors
  let red = Math.floor(Math.random() * 255);
  let green = Math.floor(Math.random() * 255);
  let blue = Math.floor(Math.random() * 255);
  return String(`rgb(${red}, ${green}, ${blue})`);
}

function colorConvert(hexColor) {
  // convert hex value received as a string to an array w/ 3 members
  let hexArray = Array.from(hexColor);

  let red = [hexArray[1], hexArray[2]];
  let green = [hexArray[3], hexArray[4]];
  let blue = [hexArray[5], hexArray[6]];

  // convert each 2-digit value to a decimal number from 0-255
  let redRgb = hexToRgb(red);
  console.log(redRgb);
  let greenRgb = hexToRgb(green);
  console.log(greenRgb);
  let blueRgb = hexToRgb(blue);
  console.log(blueRgb);
  // assemble string to return:  'rgb(r, g, b)'
  let finalRgb = `rgb(${redRgb}, ${greenRgb}, ${blueRgb})`;
  // return redGreenBlueValue;
  return finalRgb;
}

function hexToRgb(hexArray) {
  let decimalValue = 0;
  let ones = convertHexToDecimal(hexArray[1]);

  let sixteens = convertHexToDecimal(hexArray[0]) * 16;
  decimalValue = ones + sixteens;
  return decimalValue;
}

function convertHexToDecimal(digit) {
  let decimal = 0;
  if (digit === "a") {
    decimal = 10;
  } else if (digit === "b") {
    decimal = 11;
  } else if (digit === "c") {
    decimal = 12;
  } else if (digit === "d") {
    decimal = 13;
  } else if (digit === "e") {
    decimal = 14;
  } else if (digit === "f") {
    decimal = 15;
  } else if (Number(digit) <= 9) {
    decimal += Number(digit);
  }
  return decimal;
}
