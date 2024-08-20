const fs = require("fs");
const filePath = process.platform === "linux" ? "dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const n = Number(input[0]);

for (let i = 1; i <= n; i++) {
  const step = input[i].split(" ");
  const result = step.map((item) => {
    return `${item[0]}${item[item.length - 1]}`;
  });
  console.log(result.join("\n"));
}
