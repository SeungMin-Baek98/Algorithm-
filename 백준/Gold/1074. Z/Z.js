const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split(" ");

const [N, r, c] = input.map((value) => Number(value));

let count = 0;

function DFS(x, y, size) {
  if (size === 1) {
    return;
  }

  // 각 사분면 안에 몇개의 숫자가 있는지 계산해야하기 위해서 size 를 2로 나눈다음 제곱한다.
  const halfSize = size / 2;
  const halfSizeNums = halfSize * halfSize;

  // r,c에 따른 사분면을 찾아야됨

  // 1사분면
  if (r < x + halfSize && c < y + halfSize) {
    DFS(x, y, halfSize);
  }

  //2사분면
  if (r < x + halfSize && c >= y + halfSize) {
    count += halfSizeNums;
    DFS(x, y + halfSize, halfSize);
  }

  //3사분면
  if (r >= x + halfSize && c < y + halfSize) {
    count += halfSizeNums * 2;
    DFS(x + halfSize, y, halfSize);
  }

  //4사분면
  if (r >= x + halfSize && c >= y + halfSize) {
    count += halfSizeNums * 3;
    DFS(x + halfSize, y + halfSize, halfSize);
  }

}

DFS(0, 0, 2 ** N);
console.log(count);
