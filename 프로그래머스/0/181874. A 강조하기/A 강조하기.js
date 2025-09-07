function solution(myString) {
  const splitStr = myString.split("");
  let answer = "";
  for (const str of splitStr) {
    if (str.charCodeAt() === 97 || str.charCodeAt() === 65) {
      answer += str.toUpperCase();
    } else {
      answer += str.toLowerCase();
    }
  }
  return answer;
}