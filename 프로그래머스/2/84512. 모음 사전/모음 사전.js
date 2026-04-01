function solution(word) {
  const vowels = ["A", "E", "I", "O", "U"]; // 모음 배열
  let answer = 0;

  // 완전탐색 시작
  const dfs = (currentWord) => {
    if (currentWord.length === 5) return false;

    for (let i = 0; i < vowels.length; i++) {
      const nextWord = currentWord + vowels[i];
      answer++;

      if (nextWord === word) return true; // nextWord 와 word가 동일하다면 단어를 찾은거니간 반복문 멈춤
      if (dfs(nextWord)) return true; // 전체 탐색종료
    }

    return false;
  };

  dfs("");
  return answer;
}
