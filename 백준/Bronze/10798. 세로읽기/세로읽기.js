const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const lineLength = Math.max(...input.map((i) => i.length));

let result = "";
for (let i = 0; i < lineLength; i++) {
  for (let j = 0; j < input.length; j++) {
    result += input[j][i] || "";
  }
}

console.log(result);
