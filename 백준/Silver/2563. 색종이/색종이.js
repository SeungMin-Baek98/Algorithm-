const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const num = Number(input[0]);

let arr = new Array(100).fill(0).map(() => new Array(100).fill(0));
let count = 0;

for (let i = 1; i <= num; i++) {
  //x,y좌표값만큼 1로 채울거임
  const [x, y] = input[i].split(" ").map(Number);

  //x,y좌표를 기준으로 100x100 0 -> 1 로 채움
  //paper의 크기만큼 1로 채운다.

  for (let px = 0; px < 10; px++) {
    for (let py = 0; py < 10; py++) {
      if (x + px < 100 && y + py < 100) {
        arr[x + px][y + py] = 1;
      }
    }
  }
}

//1로 선택된 배열의 count수 증가.

for (let i = 0; i < 100; i++) {
  for (let j = 0; j < 100; j++) {
    if (arr[i][j] === 1) {
      count += 1;
    }
  }
}
console.log(count);
