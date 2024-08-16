const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split(" ");

const a = parseInt(input[0]);
const b = parseInt(input[1]);
const c = parseInt(input[2]);
const d = parseInt(input[3]);
const e = parseInt(input[4]);

const sqrSum = a * a + b * b + c * c + d * d + e * e;

const result = sqrSum % 10;

console.log(result);
