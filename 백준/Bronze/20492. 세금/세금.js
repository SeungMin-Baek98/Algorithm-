const fs = require("fs");
const filePath = process.platform === "linux" ? "dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split(" ");

const a = Number(input[0]);
const result1 = a - a * 0.22; // case 1.
console.log(result1);

const b = a - a * 0.2; // case 2.
const result2 = b + (a - b) * 0.78;
console.log(result2);
