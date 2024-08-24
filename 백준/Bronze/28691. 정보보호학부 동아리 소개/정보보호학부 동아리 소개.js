const fs = require("fs");
const filePath = process.platform === "linux" ? "dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("");

const names = ["MatKor", "WiCys", "CyKor", "AlKor", "$clear"];
const str = input[0];

if (str === "M") {
  console.log(names[0]);
}
if (str === "W") {
  console.log(names[1]);
}
if (str === "C") {
  console.log(names[2]);
}
if (str === "A") {
  console.log(names[3]);
}
if (str === "$") {
  console.log(names[4]);
}
