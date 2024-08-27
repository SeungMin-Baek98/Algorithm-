const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [N, M] = input[0].trim().split(" ").map(Number);

let basket = new Array(N).fill(0); // N개의 바구니를 0으로 초기화

for (let i = 1; i <= M; i++) {
  const [start, end, ball] = input[i].split(" ").map(Number);
  // start ~ end => i ~ n 째 바구니
  // ball => K번의 공을 넣겠다.
  for (let j = start - 1; j <= end - 1; j++) {
    basket[j] = ball;
  }
}

console.log(basket.join(" "));
