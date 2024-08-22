const fs = require("fs");
const filePath = process.platform === "linux" ? "dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split(" ");

const num = Number(input[0]);
const n = num / 4;
let str = "";
for (let i = 0; i < n; i++) {
  str = str + "long ";
}
console.log(str + "int");
