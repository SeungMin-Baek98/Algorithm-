const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const ts = Number(input.shift());
let idx = 0;

const results = [];

for (let i = 0; i < ts; i++) {
  const n = Number(input[idx++]);
  const clothes = new Map();

  for (let j = 0; j < n; j++) {
    const [clothe, kind] = input[idx++].split(" ");
    if (clothes.has(kind)) {
      clothes.set(kind, clothes.get(kind) + 1);
    } else {
      clothes.set(kind, 1);
    }
  }

  let result = 1;
  for (const values of clothes.values()) {
    result *= values + 1;
  }

  results.push(result - 1);
}

console.log(results.join("\n"));
