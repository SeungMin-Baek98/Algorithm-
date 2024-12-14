const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = BigInt(fs.readFileSync(filePath).toString().trim());

const MOD = 1000000;
const PISANO_PERIOD = 1500000;

const n = Number(input % BigInt(PISANO_PERIOD));

function fibonacci(modN) {
  const dy = Array.from({ length: modN + 1 });
  dy[0] = 0;
  dy[1] = 1;

  for (let i = 2; i <= modN; i++) {
    dy[i] = (dy[i - 1] + dy[i - 2]) % MOD;
  }
  return dy[modN];
}

console.log(fibonacci(n));
