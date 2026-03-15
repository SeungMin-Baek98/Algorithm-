function solution(number) {
  const sortedArr = [...number].sort((a, b) => a - b);
  let count = 0;

  for (let left = 0; left < sortedArr.length - 2; left++) {
    for (let right = left + 2; right < sortedArr.length; right++) {
      const remains = sortedArr.slice(left + 1, right);

      for (let i = 0; i < remains.length; i++) {
        if (sortedArr[left] + sortedArr[right] + remains[i] === 0) {
          count++;
        }
      }
    }
  }

  return count;
}
