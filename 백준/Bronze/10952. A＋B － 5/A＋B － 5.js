const fs = require("fs");
const filePath = process.platform === "linux" ? "dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

input.pop();

for (let i = 0; i < input.length; i++) {
  const a = input[i].split(" ");
  console.log(Number(a[0]) + Number(a[1]));
}
