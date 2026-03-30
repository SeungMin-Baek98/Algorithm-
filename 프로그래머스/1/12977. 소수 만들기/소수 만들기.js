// 여기서는 소수인지 아닌지 파악하는 함수 생성
function getPrime(num) {
  if (num < 2) return false;

  for (let i = 2; i * i <= num; i++) {
    if (num % i === 0) return false;
  }

  return true;
}

function solution(nums) {
  const combArr = [];
  let result = 0;

  for (let i = 0; i < nums.length - 2; i++) {
    for (let j = i + 1; j < nums.length - 1; j++) {
      for (let k = j + 1; k < nums.length; k++) {
        combArr.push([nums[i], nums[j], nums[k]]);
      }
    }
  }

  const eachElReduce = combArr.map((item) =>
    item.reduce((acc, cur) => acc + cur, 0),
  );

  for (const el of eachElReduce) {
    if (getPrime(el)) result++;
  }

  return result;
}
