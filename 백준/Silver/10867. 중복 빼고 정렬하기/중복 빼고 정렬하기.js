const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

input.shift();

let newArr = input[0].split(" ").map(Number);

newArr = [...new Set(newArr)];

console.log(newArr.sort((a, b) => a - b).join(" "));
