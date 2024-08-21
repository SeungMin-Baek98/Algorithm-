const fs = require("fs");
const filePath = process.platform === "linux" ? "dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split(" ");

const a = BigInt(input[0]);
const b = BigInt(input[1]);

console.log((a * b).toString());
