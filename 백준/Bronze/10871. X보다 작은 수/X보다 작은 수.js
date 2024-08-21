const fs = require("fs");
const filePath = process.platform === "linux" ? "dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

let inputs = [];
inputs = input[0].split(" ");
let newInput = input[1].split(" ").map(Number);
let result = "";

const list = Number(inputs[0]); //숫자의 개수 10
const num = Number(inputs[1]); // 기준숫자 5

for (let i = 0; i < list; i++) {
  if (newInput[i] < num) {
    result = result + newInput[i] + " ";
  }
}

console.log(result);
