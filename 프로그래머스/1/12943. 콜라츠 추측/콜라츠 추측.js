function even(num) {
  return num % 2 === 0;
}

function odd(num) {
  return num % 2 !== 0;
}

function solution(num) {
  let count = 0;
  if (num === 1) return 0;

  while (num !== 1) {
    if (even(num)) {
      num = num / 2;
      count++;
    } else if (odd(num)) {
      num = num * 3 + 1;
      count++;
    }

    if (count === 500) return -1;
  }

  return count;
}