const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().split(" ").map(Number);

let x = input[0];
let y = input[1];
let w = input[2];
let h = input[3];

let newArray = [];

newArray.push(x, y, w - x, h - y);
console.log(Math.min(...newArray));
