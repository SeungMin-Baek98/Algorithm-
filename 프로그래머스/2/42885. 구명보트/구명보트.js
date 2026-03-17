function solution(people, limit) {
  var answer = 0;
  const sortedArr = people.sort((a, b) => a - b); // 배열 sort
  let left = 0;
  let right = sortedArr.length - 1;

  while (left <= right) {
    if (sortedArr[left] + sortedArr[right] <= limit) {
      left++;
    }
    right--;
    answer++;
  }

  return answer;
}