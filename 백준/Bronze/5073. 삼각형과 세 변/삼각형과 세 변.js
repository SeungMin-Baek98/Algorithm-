const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().split("\n");

for (let i = 0; i < input.length; i++) {
  const [x, y, z] = input[i].split(" ").map(Number);

  if (x === 0 && y === 0 && z === 0) break;

  const maxNum = Math.max(x, y, z);
  const restNum = x + y + z - maxNum;

  if (maxNum >= restNum) {
    console.log("Invalid");
  } else if (x === y && y === z) {
    console.log("Equilateral");
  } else if (x === y || y === z || x === z) {
    console.log("Isosceles");
  } else {
    console.log("Scalene");
  }
}
