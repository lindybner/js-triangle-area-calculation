// var
const output = document.querySelector("#output");
const side1 = 5;
const side2 = 6;
const side3 = 7;
let semiperi;
let s;
let area;

// fn
function findSemiPeri(a, b, c) {
  semiperi = (a + b + c) / 2;
  return semiperi;
}

function calcTriArea(a, b, c) {
  s = findSemiPeri(a, b, c);
  area = Math.sqrt(s * (s - a) * (s - b) * (s - c));
  return area;
}

function outputFn() {
  output.innerHTML = calcTriArea(side1, side2, side3);
}

// call outputFn
outputFn();
