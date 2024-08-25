const fs = require("fs");
const filePath = process.platform === "linux" ? "dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

input.pop();

const vowels = ["a", "e", "i", "o", "u"]; // 모음

for (let i = 0; i < input.length; i++) {
  let findVowels = 0; // 찾은 모음들 개수
  const newArr = input[i].toString().trim().split("");

  for (let j = 0; j < newArr.length; j++) {
    if (vowels.includes(newArr[j].toLowerCase())) {
      findVowels = findVowels + 1;
    }
  }
  console.log(findVowels);
}
