const fs = require("fs");
const filePath = process.platform === "linux" ? "dev/stdin" : "input.txt";
const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(" ")
  .map(Number);

const subway = input[1];
const bus = input[2];
if (bus > subway) {
  console.log("Bus");
} else if (bus < subway) {
  console.log("Subway");
} else {
  console.log("Anything");
}
