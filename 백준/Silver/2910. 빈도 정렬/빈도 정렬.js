const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const numbers = input.slice(1).toString().split(" ").map(Number);
const map = new Map();

//최빈수 구하기
for (const number of numbers) {
  if (map.has(number)) {
    map.set(number, map.get(number) + 1);
  } else {
    map.set(number, 1);
  }
}

const result = [...map]
  .sort((a, b) => b[1] - a[1])
  .flatMap(([number, freq]) => Array(freq).fill(number));

console.log(result.join(" "));
