function solution(myString) {
  myString.split("");
  const answer = [];

  for (let i = 0; i < myString.length; i++) {
    if (myString[i].charCodeAt() < 108) {
      answer.push("l");
    } else {
      answer.push(myString[i]);
    }
  }
  return answer.join("");
}
