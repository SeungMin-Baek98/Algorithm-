const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const N = Number(input[0]);
let series = 666; 
let count = 0;

while (true) {
  if (String(series).includes("666")) {
    count++;
    if (count === N) {
      break;
    }
  }
  series++;
}

console.log(series);
