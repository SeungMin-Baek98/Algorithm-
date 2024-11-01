const { count } = require("console");
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const numbers = input.slice(1).map(Number);
const a = numbers.reduce(
  (accumulator, currentValue) => accumulator + currentValue
);
let average = Math.round(a / numbers.length);

if (average === -0) {
  average = 0;
}
console.log(average);

numbers.sort((a, b) => a - b);

//최빈값 구하기
const countNumber = new Map();

numbers.forEach((num) => {
  if (countNumber.has(num)) {
    countNumber.set(num, countNumber.get(num) + 1);
  } else {
    countNumber.set(num, 1);
  }
});

let maxNumber = 0;
let modes = [];

countNumber.forEach((count, num) => {
  if (count > maxNumber) {
    maxNumber = count;
    modes = [num];
  } else if (count === maxNumber) {
    modes.push(num);
  }
});

modes.sort((a, b) => a - b);
const result = modes.length > 1 ? modes[1] : modes[0];

console.log(numbers[Math.floor(numbers.length / 2)]);
console.log(result);
console.log(Math.max(...numbers) - Math.min(...numbers));
