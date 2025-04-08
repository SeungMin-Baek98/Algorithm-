// 백준 16953
// A -> B

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [A, B] = input.shift().split(" ").map(Number);
let result = -1;

// DFS
function DFS(cur, target, cnt) {
  if (cur === target) {
    result = cnt + 1;
  } else {
    if (cur * 2 <= target) {
      DFS(cur * 2, target, cnt + 1);
    }
    if (Number(cur + "1") <= target) {
      DFS(Number(cur + "1"), target, cnt + 1);
    }
  }
}

DFS(A, B, 0);
console.log(result);
