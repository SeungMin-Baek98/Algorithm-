const fs = require("fs");
const filePath = process.platform === "linux" ? "dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split(" ");

const n = Number(input[0]);

for (let i = 1; i <= n; i++) {
  let result = "";
  for (let j = 1; j <= n - i; j++) {
    result = result + " ";
  }
  for (let k = 0; k < i; k++) {
    result = result + "*";
  }
  console.log(result);
}
