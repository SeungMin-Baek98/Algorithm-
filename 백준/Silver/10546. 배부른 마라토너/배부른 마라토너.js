const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const tryCount = Number(input.shift());

const personMap = new Map();
for (let i = 0; i < tryCount; i++) {
  const name = input[i];
  personMap.set(name, (personMap.get(name) || 0) + 1);
}

for (let i = tryCount; i < input.length; i++) {
  const name = input[i];
  personMap.set(name, (personMap.get(name) || 0) - 1);
}

for (const [key, value] of personMap) {
  if (value === 1) {
    console.log(key);
    break;
  }
}
