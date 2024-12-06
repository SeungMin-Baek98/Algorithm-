const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split(" ");

const number = Number(input.shift());

function fibonacci(n) {
  if (n === 0) return [0, 0];
  if (n === 1) return [1, 1];
  let mod = 1000000000;

  let absN = Math.abs(n);
  let dy = Array.from({ length: absN + 1 });
  dy[0] = 0;
  dy[1] = 1;

  for (let i = 2; i <= absN + 1; i++) {
    dy[i] = (dy[i - 2] + dy[i - 1]) % mod;
  }

  let sign = 0;
  if (n < 0 && n % 2 === 0) {
    sign = -1;
  } else {
    sign = 1;
  }

  return [sign, dy[absN]];
}

const [sign, fibo] = fibonacci(number);

console.log(sign);
console.log(fibo);
