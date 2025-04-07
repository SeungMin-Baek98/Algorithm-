// 백준 15663
// N 과 M (9)

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [N, M] = input[0].split(" ").map(Number);
const numbers = input[1]
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);
let isVisited = Array.from({ length: numbers.length }).fill(false);
let answer = "";

function BT(selected) {
  if (selected.length === M) {
    answer += selected.join(" ") + "\n";
    return;
  }
  let preNumber = -1;
  for (let i = 0; i < N; i++) {
    if (isVisited[i] === false && preNumber !== numbers[i]) {
      isVisited[i] = true;
      BT([...selected, numbers[i]]);
      isVisited[i] = false;
      preNumber = numbers[i];
    }
  }
}

BT([]);
console.log(answer);
