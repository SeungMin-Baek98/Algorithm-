const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().split("\n");

for (let i = 0; i < input.length; i++) {
  const [x, y] = input[i].split(" ").map(Number);
  if (x === 0 && y === 0) break;

  if (y % x === 0) {
    console.log("factor");
  } else if (x % y === 0) {
    console.log("multiple");
  } else {
    console.log("neither");
  }
}
