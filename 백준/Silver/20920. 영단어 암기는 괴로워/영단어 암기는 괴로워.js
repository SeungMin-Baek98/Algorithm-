const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

let [n, m] = input[0].split(" ").map(Number);
let map = new Map();
let filterWord = input.slice(1).filter((value) => {
  return value.length >= m;
});

for (let i = 0; i < filterWord.length; i++) {
  const word = filterWord[i];
  if (map.has(word)) {
    map.set(word, map.get(word) + 1);
  } else {
    map.set(word, 1);
  }
}

map = [...map]
  .sort((a, b) => {
    // [key,value] 에서 value값이 같으면
    if (a[1] === b[1]) {
      // key값의 길이가 같은상태에서는 사전순서대로
      if (a[0].length === b[0].length) {
        return a[0] < b[0] ? -1 : 1;
      } else {
        return b[0].length - a[0].length;
      }
    } else {
      return b[1] - a[1];
    }
  })
  .map((i) => i[0]);

console.log(map.join("\n"));
