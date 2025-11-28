function solution(nums) {
  var answer = 0;
  const arr = [...new Set(nums)];

  return (answer =
    arr.length <= nums.length / 2 ? arr.length : nums.length / 2);
}