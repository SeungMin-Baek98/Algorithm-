function solution(nums) {
  const maxKind = nums.length / 2;
  const removeDupli = [...new Set(nums)];

  if (removeDupli.length === maxKind) return maxKind;
  else if (removeDupli.length < maxKind) return removeDupli.length;
  else return maxKind;
}
