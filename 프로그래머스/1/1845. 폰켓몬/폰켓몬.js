function solution(nums) {
  const setArr = new Set(nums);

  return setArr.size > nums.length / 2 ? Math.min(setArr.size, nums.length/2) : setArr.size;
}
