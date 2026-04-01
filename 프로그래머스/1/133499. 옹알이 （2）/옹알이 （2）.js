function solution(babbling) {
  const words = ["aya", "ye", "woo", "ma"];
  let answer = 0;

  for (let i = 0; i < babbling.length; i++) {
    let current = babbling[i];
    let prevWord = "";
    let isValid = true;

    while (current.length > 0) {
      let matched = false;

      for (let j = 0; j < words.length; j++) {
        const word = words[j];

        if (current.startsWith(word) && prevWord !== word) {
          current = current.slice(word.length);
          prevWord = word;
          matched = true;
          break;
        }
      }

      if (!matched) {
        isValid = false;
        break;
      }
    }

    if (isValid) answer++;
  }

  return answer;
}
