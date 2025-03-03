const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const N = Number(input.shift());
const ingredients = input.map((value) => value.split(" ").map(Number));

let result = Number.MAX_SAFE_INTEGER;

function solution(index, sour, bitter, used) {
  //최소한의 하나는 사용
  if (used > 0) {
    result = Math.min(result, Math.abs(sour - bitter));
  }

  for (let i = index; i < N; i++) {
    const [s, b] = ingredients[i];
    solution(i + 1, sour * s, bitter + b, used + 1);
  }

  return result;
}

solution(0, 1, 0, 0);
console.log(result);
