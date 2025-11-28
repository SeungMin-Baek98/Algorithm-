function solution(n, words) {
  const set = new Set();

  for (let i = 0; i < words.length; i++) {
    // 마지막 글자 === 첫 글자 or 같은 단어 중복
    // 어차피 첫 단어는 통과이므로 1부터 검사
    if (i > 0) {
      if (
        words[i - 1].slice(-1) !== words[i][0] ||
        set.has(words[i] || words[i].length !== 1)
      ) {
        return [(i % n) + 1, Math.floor(i / n) + 1];
      }
    }
    set.add(words[i]);
  }
  return [0, 0];
}
