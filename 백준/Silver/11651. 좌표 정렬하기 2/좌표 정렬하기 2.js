const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const tryCount = Number(input[0]);
let result = [];
for (let i = 1; i <= tryCount; i++) {
  const [x, y] = input[i].split(" ").map(Number);
  result.push([x, y]);
}

result.sort((a, b) => {
  if (a[1] === b[1]) {
    return a[0] - b[0];
  } else {
    return a[1] - b[1];
  }
});

for (let i = 0; i < tryCount; i++) {
  console.log(result[i].join(" "));
}
