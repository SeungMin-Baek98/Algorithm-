const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().split("\n");

let arrayX = [];
let arrayY = [];
let x;
let y;

for (let i = 0; i < 3; i++) {
  const [x, y] = input[i].split(" ").map(Number);
  arrayX.push(x);
  arrayY.push(y);
}

arrayX.sort(); // [5,5,7]
arrayY.sort(); // [5,5,7]

x = arrayX[0] === arrayX[1] ? arrayX[2] : arrayX[0];
y = arrayY[0] === arrayY[1] ? arrayY[2] : arrayY[0];
console.log(`${x} ${y}`);
