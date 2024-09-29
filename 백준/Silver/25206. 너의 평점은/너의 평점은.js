const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

let newInput = input.map((subject) => subject.split(" "));

//과목 이름 삭제
for (let i = 0; i < newInput.length; i++) {
  newInput[i].shift();
}

//학점의 총합
let totalScore = 0;

//전공과목별 총합
let totalSubject = 0;

//학점 및 평점에서 둘이 분리
for (let j = 0; j < newInput.length; j++) {
  let score = Number(newInput[j][0]);
  let grade = newInput[j][1];
  let subjectScore = 0;

  if (grade === "A+") {
    subjectScore = 4.5;
  } else if (grade === "A0") {
    subjectScore = 4.0;
  } else if (grade === "B+") {
    subjectScore = 3.5;
  } else if (grade === "B0") {
    subjectScore = 3.0;
  } else if (grade === "C+") {
    subjectScore = 2.5;
  } else if (grade === "C0") {
    subjectScore = 2.0;
  } else if (grade === "D+") {
    subjectScore = 1.5;
  } else if (grade === "D0") {
    subjectScore = 1.0;
  } else if (grade === "P") {
    continue;
  } else if (grade === "F") {
    subjectScore = 0.0;
  }
  totalScore += score;
  totalSubject += score * subjectScore;
}

// 분모가 0 일경우에 NaN이 발생하기때문에 따로 삼항연산자를 이용하여 처리.
const average = totalScore === 0 ? 0 : totalSubject / totalScore;

console.log(average);
