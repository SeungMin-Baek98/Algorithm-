function solution(a, b) {
  let answer = 0;
  let arr1 = [];
  arr1.push(a);
  arr1.push(b);

  arr1.sort((a, b) => a - b);

  let arr2 = [];
  for (let i = arr1[0]; i <= arr1[1]; i++) {
    arr2.push(i);
  }

  answer = arr2.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );
  return answer;
}
