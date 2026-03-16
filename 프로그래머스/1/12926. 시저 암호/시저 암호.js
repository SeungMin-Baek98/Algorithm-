function solution(s, n) {
  const splitWord = s.split("");
  let answer = "";
  for (let i = 0; i < splitWord.length; i++) {
    const code = splitWord[i].charCodeAt();

    if (splitWord[i] === " ") answer += " ";
    //소문자
    else if (code >= 97 && code <= 122) {
      const str = String.fromCharCode(
        ((splitWord[i].charCodeAt() - 97 + n) % 26) + 97,
      );
      answer += str;
    }
    // 대문자
    else if (code >= 65 && code <= 90) {
      const str = String.fromCharCode(
        ((splitWord[i].charCodeAt() - 65 + n) % 26) + 65,
      );
      answer += str;
    }
  }
  return answer;
}