function solution(elements) {
  const arr = [];
  const extended = [...elements, ...elements];

  for (let len = 1; len <= elements.length; len++) {
    for (let start = 0; start < elements.length; start++) {
      const sum = extended
        .slice(start, start + len)
        .reduce((acc, cur) => acc + cur, 0);

      arr.push(sum);
    }
  }

  return new Set(arr).size;
}