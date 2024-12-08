const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [N, M] = input[0].split(" ").map(Number);
const nums = input[1].split(" ").map(Number);

function solution(target, arr) {
  let answer = 0;
  let lt = 0;
  let rt = Math.max(...arr);

  while (lt <= rt) {
    let mid = Math.floor((lt + rt) / 2);
    let cutLength = 0;

    for (let height of arr) {
      if (height > mid) {
        cutLength += height - mid;
      }
    }

    if (cutLength >= target) {
      answer = mid;
      lt = mid + 1;
    } else {
      rt = mid - 1;
    }
  }
  return answer;
}

console.log(solution(M, nums));
