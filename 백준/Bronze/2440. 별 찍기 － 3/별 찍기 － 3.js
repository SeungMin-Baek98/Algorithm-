const fs = require("fs");
const filePath = process.platform === "linux" ? "dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split(" ");

const n = Number(input[0]);

for (let i = n; i > 0; i--) {
  let result = "";
  for (let j = 1; j <= i; j++) {
    result = result + "*";
  }
  result = result + " ";
  console.log(result);
}
