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
}

/*
 Find First and Last Position of Element in Sorted Array

 Given an array of integers nums sorted in ascending order, find the starting and ending position of a given target value.

Your algorithm's runtime complexity must be in the order of O(log n).

If the target is not found in the array, return [-1, -1].

Example 1:

Input: nums = [5,7,7,8,8,10], target = 8
Output: [3,4]
Example 2:

Input: nums = [5,7,7,8,8,10], target = 6
Output: [-1,-1]
*/

function searchRange(nums, target) {
  if (nums.length == 1) {
    if (nums[0] == target) return [0, 0];
    return [-1, -1];
  }

  if (nums[0] == target && nums[nums.length - 1] == target) {
    return [0, nums.length - 1];
  }

  const foundAt = binarySearch(nums, target);

  if (foundAt == -1) {
    return [-1, -1];
  }

  let first = foundAt;
  let second = foundAt;

  if (nums[foundAt - 1] == target) {
    while (nums[first - 1] == target) {
      first--;
    }
  }

  if (nums[foundAt + 1] == target) {
    while (nums[second + 1] == target) {
      second++;
    }
  }

  return [first, second];
}

function binarySearch(nums, target) {
  let low = 0;
  let high = nums.length - 1;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);

    if (nums[mid] == target) {
      return mid;
    } else if (target < nums[mid]) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }

  return -1;
}

/*
Permutations

Given a collection of distinct integers, return all possible permutations.

Example:

Input: [1,2,3]
Output:
[
  [1,2,3],
  [1,3,2],
  [2,1,3],
  [2,3,1],
  [3,1,2],
  [3,2,1]
]
*/

function permute(nums) {
  return helper(nums);
};

function helper(nums, set = [], answer = []) {
  if (!nums.length) {
    answer.push([...set]);
  }

  for (let i = 0; i < nums.length; i++) {
    const availableNumbers = nums.filter((num, index) => i != index);
    set.push(nums[i]);

    helper(availableNumbers, set, answer);
    set.pop();
  }

  return answer;
}
