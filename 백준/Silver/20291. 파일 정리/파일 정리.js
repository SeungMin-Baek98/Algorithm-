const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const files = input.slice(1).map((str) => str.split(".")[1]);
let map = new Map();

//최빈수 구하기
for (const extensions of files) {
  if (map.has(extensions)) {
    map.set(extensions, map.get(extensions) + 1);
  } else {
    map.set(extensions, 1);
  }
}

const result = [...map].sort().map(([key, value]) => `${key} ${value}`);

console.log(result.join("\n"));
