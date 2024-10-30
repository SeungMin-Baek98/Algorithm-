const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = fs.readFileSync(filePath).toString().trim().split(" ").map(Number);

input.sort((a, b) => a - b);

const mid = Math.floor(input.length / 2);

console.log(input[mid]);
