const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const n = Number(input[0]);
const enterCars = input.slice(1, 1 + n);
const exitCars = input.slice(n + 1);

const enterMap = new Map();

for (let i = 0; i < n; i++) {
  enterMap.set(enterCars[i], i);
}

let count = 0;
// i 는 들어간 차량
// j 는 그 뒤에 나오는 차량
for (let i = 0; i < n - 1; i++) {
  for (let j = i + 1; j < n; j++) {
    if (enterMap.get(exitCars[i]) > enterMap.get(exitCars[j])) {
      count++;
      break;
    }
  }
}

console.log(count);
