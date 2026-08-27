function solution(nums) {
  const set = [...new Set(nums)];
  const length = set.length;
  const pockemonCount = nums.length / 2;

  if (length > pockemonCount) return pockemonCount;
  else if (length === pockemonCount) return pockemonCount;
  else return length;
}
