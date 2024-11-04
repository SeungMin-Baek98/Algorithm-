const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim();

const result = [];
for (let i = 0; i < input.length; i++) {
  result.push(input.slice(i));
}
console.log(result.sort().join("\n"));
