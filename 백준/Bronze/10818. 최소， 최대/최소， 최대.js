const fs = require("fs");
const filePath = process.platform === "linux" ? "dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const n = Number(input[0]);
const newArr = input[1].trim().split(" ").map(Number);

const minNum = Math.min(...newArr);
const maxNum = Math.max(...newArr);

console.log(minNum, maxNum);
