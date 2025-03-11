const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const N = Number(input.shift());
const personInfo = input.map((value) => value.split(" ").map(Number));
const result = [];
for (let i = 0; i < N; i++) {
  let rank = 1;

  for (let j = 0; j < N; j++) {
    if (
      personInfo[i][0] < personInfo[j][0] &&
      personInfo[i][1] < personInfo[j][1]
    ) {
      rank++;
    }
  }
  result.push(rank);
}

console.log(result.join(" "));
