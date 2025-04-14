// 백준 15289
// Hashing

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const char = input[1].split("").map((str) => str.charCodeAt(0) - 96);
const M = 1234567891;
const r = 31;

let sum = 0;
let pow = 1;

for (let i = 0; i < char.length; i++) {
  sum = (sum + ((char[i] * pow) % M)) % M;
  pow = (pow * r) % M;
}

console.log(sum);
