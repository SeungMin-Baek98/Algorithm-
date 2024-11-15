const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [n, s] = input[0].split(" ").map(Number);
const nums = input[1].split(" ").map(Number);

function solution(totalSum, arr) {
  let n = arr.length;
  let count = 0;

  function DFS(L, sum) {
    if (L === n) {
      // 공집합은 제외
      if (sum === totalSum) {
        count++;
      }
      return;
    } else {
      DFS(L + 1, sum + arr[L]);
      DFS(L + 1, sum);
    }
  }

  DFS(0, 0);

  //공백제거
  if (totalSum === 0) count -= 1;

  return count;
}

console.log(solution(s, nums));
