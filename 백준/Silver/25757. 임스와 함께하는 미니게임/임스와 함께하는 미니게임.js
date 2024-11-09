const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [person, gameType] = input[0].split(" ");

const persons = [...new Set(input)].slice(1);
const map = new Map();

// 각각의 게임 인원수 map으로 지정
if (gameType === "Y") {
  map.set(gameType, 2);
} else if (gameType === "F") {
  map.set(gameType, 3);
} else if (gameType === "O") {
  map.set(gameType, 4);
}

const result = Math.floor(persons.length / (map.get(gameType) - 1));
console.log(result);
