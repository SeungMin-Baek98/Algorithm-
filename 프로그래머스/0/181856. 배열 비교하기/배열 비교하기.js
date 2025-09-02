function solution(arr1, arr2) {
  let answer = 0;
  const length1 = arr1.length;
  const length2 = arr2.length;

  const sum1 = arr1.reduce((acc, cur) => acc + cur, 0);
  const sum2 = arr2.reduce((acc, cur) => acc + cur, 0);

  if (length1 === length2) {
    if (sum1 > sum2) {
      answer = 1;
    } else if (sum1 < sum2) {
      answer = -1;
    } else {
      answer = 0;
    }
  } else {
    if (length1 > length2) {
      answer = 1;
    } else if (length1 < length2) {
      answer = -1;
    }
  }

  return answer;
}
