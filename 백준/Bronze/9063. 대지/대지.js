const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().split("\n");

const num = Number(input[0]);
let arrayX = [];
let arrayY = [];

for (let i = 1; i <= num; i++) {
  const [x, y] = input[i].split(" ").map(Number);
  arrayX.push(x);
  arrayY.push(y);
}
const maxX = Math.max(...arrayX);
const minX = Math.min(...arrayX);

const maxY = Math.max(...arrayY);
const minY = Math.min(...arrayY);

console.log((maxX - minX) * (maxY - minY));
