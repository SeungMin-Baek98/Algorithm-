const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().split(" ");

let A = input[0];
let B = input[1];
let V = input[2];

console.log(Math.ceil((V - B) / (A - B)));
