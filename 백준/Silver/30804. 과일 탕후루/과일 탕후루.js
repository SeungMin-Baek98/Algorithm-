const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const N = Number(input.shift());
const fruits = input.toString().split(" ").map(Number);
let left = 0; // 왼쪽 idx
let right = 0; // 오른쪽 idx
let fruitMap = new Map();
let maxCount = 0;

while (right < N) {
  // 왼쪽 -> 오른쪽 과일 탐색하면서
  // 있는 과일이면 +1, 없는 과일이면 새로 추가
  fruitMap.set(fruits[right], (fruitMap.get(fruits[right]) || 0) + 1);

  while (fruitMap.size > 2) {
    // 과일이 3개 이상이면 왼쪽 포인터 이동
    fruitMap.set(fruits[left], fruitMap.get(fruits[left]) - 1);

    if (fruitMap.get(fruits[left]) === 0) {
      fruitMap.delete(fruits[left]);
    }

    left++;
  }

  maxCount = Math.max(maxCount, right - left + 1);

  right++;
}

console.log(maxCount);
