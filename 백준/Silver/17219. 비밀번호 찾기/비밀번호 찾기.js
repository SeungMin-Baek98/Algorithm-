const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [n, m] = input[0].split(" ").map(Number);
const siteMaps = new Map();

for (let i = 1; i <= n; i++) {
  const [sites, passwords] = input[i].split(" ");
  siteMaps.set(sites, passwords);
}

const result = [];
for (let i = n + 1; i <= n + 1 + m; i++) {
  const findPassword = input[i];
  if (siteMaps.has(findPassword)) {
    result.push(siteMaps.get(findPassword));
  }
}
console.log(result.join("\n"));
