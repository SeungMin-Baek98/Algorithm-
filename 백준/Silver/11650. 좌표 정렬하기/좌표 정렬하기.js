const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const tryCount = input[0];
let result = [];
for (let i = 1; i <= tryCount; i++) {
  const [x, y] = input[i].toString().split(" ").map(Number);
  result.push([x, y]);
}

result.sort((a, b) => {
  if (a[0] === b[0]) {
    return a[1] - b[1]; // y를 기준으로 정렬
  } else {
    return a[0] - b[0]; // x를 기준으로 정렬
  }
});

for (let i = 0; i < tryCount; i++) {
  console.log(`${result[i][0]} ${result[i][1]}`);
}
