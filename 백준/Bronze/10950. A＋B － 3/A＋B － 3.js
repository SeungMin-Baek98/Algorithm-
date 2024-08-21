const fs = require("fs");
const filePath = process.platform === "linux" ? "dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const a = Number(input[0]);

for (let i = 1; i <= a; i++) {
  const score = input[i].split(" ");
  console.log(Number(score[0]) + Number(score[1]));
}
