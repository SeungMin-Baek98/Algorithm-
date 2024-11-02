const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

let [count, money] = input[0].split(" ").map(Number); // 동전 개수 및 가격
const coins = input
  .slice(1)
  .map(Number)
  .sort((a, b) => b - a);

let result = 0;
for (let i = 0; i < coins.length; i++) {
  const coin = coins[i];
  if (money === 0) break;

  if (coin <= money) {
    const coinNum = Math.floor(money / coin);
    money -= coin * coinNum;
    result += coinNum;
  }
}

console.log(result);