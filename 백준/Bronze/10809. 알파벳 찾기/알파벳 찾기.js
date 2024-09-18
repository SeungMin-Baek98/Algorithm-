const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString();

const result = [];

for (let i = "a".charCodeAt(); i <= "z".charCodeAt(); i++) {
  result.push(input.indexOf(String.fromCharCode(i)));
}

console.log(result.join(" "));
