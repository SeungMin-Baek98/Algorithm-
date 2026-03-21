function solution(k, m, score) {
  // 1. score배열 요소들 내림차순으로 정렬
  // 2. 앞에서 부터 m개 씩 만큼 자르면 배열 생성
  const sorted = score.sort((a, b) => b - a).filter((item) => item <= k);
  const splitArr = [];

  for (let i = 0; i < sorted.length; i += m) {
    let tempArray;
    // slice() 메서드를 사용하여 특정 길이만큼 배열을 분리함
    tempArray = sorted.slice(i, i + m);
    // 빈 배열에 특정 길이만큼 분리된 배열을 추가
    splitArr.push(tempArray);
  }
  // 3. 그 배열에서 최솟값을 구한다음
  // 4. 그 최솟값이랑 k을 서로 곱한다.
  // 5. 그럼 각 상자의 가격이 정해지는데.

  const numArr = splitArr
    .filter((item) => item.length >= m)
    .map((item) => {
      const min = Math.min(...item);
      return min * m;
    });

  // 6. 그때 이제 각 배열의 상자 가격을 더하면 최대 이익을 얻을 수 있다.
  return numArr.reduce((acc, cur) => acc + cur, 0);
}
