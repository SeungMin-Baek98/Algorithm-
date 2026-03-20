function countDivide(num) {
  let count = 0;

  for (let i = 1; i * i <= num; i++) {
    if (num % i === 0) {
      count++; // i
      if (i !== num / i) count++; // 짝이 다른 경우
    }
  }

  return count;
}
function solution(number, limit, power) {
  const divideCount = [];

  // 1. 1부터 number까지 반복문으로 countDivide함수 실행값을 담은 배열 생성
  for (let i = 1; i <= number; i++) {
    divideCount.push(countDivide(i));
  }

  // 2. 그 배열로 map메서드 활용해서 item,index를 활용
  // 3. 그 item이 limit보다 크다면 그 index는 power로 변경 나머지는 유지
  divideCount.map((item, index) => {
    item > limit ? (divideCount[index] = power) : divideCount[index];
  });

  // 4. 그 배열로 power를 곱하여 reduce()사용

  return divideCount.reduce((acc, cur) => acc + cur, 0);
}

console.log(solution(5, 3, 2));
console.log(solution(10, 3, 2));
