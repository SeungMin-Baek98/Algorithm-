const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split(" ");

const k = parseInt(input[0]);
const n = parseInt(input[1]);
const m = parseInt(input[2]);

const sum = k * n - m;

if (sum > 0) console.log(sum);
else console.log(0);
