const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const numbers = input[1].split(" ").map(Number);

// 오름차순한 숫자들의 각각의 index값을 지정하기 위해
// 중복된 값을 없앰
// set 사용
const setNumbers = [...new Set(numbers)].sort((a, b) => a - b);

// map을 사용함으로서
// 오름차순된 숫자들에게 각각의 요소에다가 index 부여
// 그 각각의 숫자들의 index값을 set하면 된다.
const mapNumbers = new Map();
setNumbers.forEach((_, index) => {
  mapNumbers.set(_, index);
});

//set 된 index를 get한다음
//새로운 배열로 만들기 위해 map()사용
const result = numbers.map((value) => mapNumbers.get(value));
console.log(result.join(" "));
