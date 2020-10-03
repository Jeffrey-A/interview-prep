/* 
Two Sum

Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.
*/

function twoSum(nums, target) {
  let sumMap = {};
  for (let i = 0; i < nums.length; i++) {
    let curr = nums[i];

    if (!sumMap[curr] && sumMap[curr] != 0) {
      sumMap[target - curr] = i;
    } else {
      return [sumMap[curr], i];
    }
  }
};
