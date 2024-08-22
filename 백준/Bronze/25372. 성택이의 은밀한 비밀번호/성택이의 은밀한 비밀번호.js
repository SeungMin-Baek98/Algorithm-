const fs = require("fs");
const filePath = process.platform === "linux" ? "dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const n = Number(input[0]);

for (let i = 1; i <= n; i++) {
  const numLength = input[i].length;
  let result = "";
  if (numLength >= 6 && numLength <= 9) {
    result = "yes";
  } else {
    result = "no";
  }
  console.log(result);
}
