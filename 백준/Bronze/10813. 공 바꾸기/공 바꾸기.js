const fs = require("fs");
const filePath = process.platform === "linux" ? "dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [N, M] = input[0].trim().split(" ").map(Number);

let basket = Array.from({ length: N }, (_, idx) => idx + 1);

for (let i = 1; i <= M; i++) {
  const [start, end] = input[i].split(" ").map(Number);
  const temp = basket[start - 1];
  basket[start - 1] = basket[end - 1];
  basket[end - 1] = temp;
}
console.log(basket.join(" "));
