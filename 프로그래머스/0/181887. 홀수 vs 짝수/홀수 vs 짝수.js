function solution(num_list) {
  let evenSum = 0;
  let oddSum = 0;

  num_list.map((el, idx) => {
    return idx % 2 === 0 ? (evenSum += el) : (oddSum += el);
  });

  if (evenSum === oddSum) {
    return evenSum;
  } else {
    return evenSum > oddSum ? evenSum : oddSum;
  }
}
