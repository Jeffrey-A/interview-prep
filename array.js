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
}

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

/* 
First Missing Positive

Given an unsorted integer array, find the smallest missing positive integer.

Your algorithm should run in O(n) time and uses constant extra space.

Solution explained: https://www.youtube.com/watch?v=2QugZILS_Q8&feature=youtu.be&ab_channel=NideeshTerapalli
*/

function firstMissingPositive(nums) {
  if (!nums.includes(1)) {
    return 1;
  }

  if (nums.length == 1) {
    return 2;
  }

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] <= 0 || nums[i] > nums.length) {
      nums[i] = 1;
    }
  }

  for (let i = 0; i < nums.length; i++) {
    let num = Math.abs(nums[i]);

    if (num == nums.length) {
      nums[0] = -Math.abs(nums[0]);
    } else {
      nums[num] = -Math.abs(nums[num]);
    }
  }

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > 0) {
      return i;
    }
  }

  if (nums[0] > 0) {
    return nums.length;
  }

  return nums.length + 1;
}

/*
Sort Colors

Given an array nums with n objects colored red, white, or blue, sort them in-place so that objects of the same color are adjacent, with the colors in the order red, white, and blue.

Here, we will use the integers 0, 1, and 2 to represent the color red, white, and blue respectively.

Example 1:

Input: nums = [2,0,2,1,1,0]
Output: [0,0,1,1,2,2]
Example 2:

Input: nums = [2,0,1]
Output: [0,1,2]
Example 3:

Input: nums = [0]
Output: [0]




*/

function sortColors(nums) {
  if (nums.length == 1) return nums;

  let first = 0;
  let curr = 0;
  let last = nums.length - 1;

  while (curr <= last) {
    if (nums[curr] == 0) {
      swap(nums, first, curr);
      first++;
      curr++;
    } else if (nums[curr] == 1) {
      curr++;
    } else if (nums[curr] == 2) {
      swap(nums, last, curr);
      last--;
    }
  }

  return nums;
}

function swap(nums, pos1, pos2) {
  let temp = nums[pos1];
  nums[pos1] = nums[pos2];
  nums[pos2] = temp;
}

function singleNumber(nums) {
  let a = 0;
  nums.forEach((num) => (a ^= num));
  return a;
}

/*
Queue Reconstruction by Height

Suppose you have a random list of people standing in a queue. Each person is described by a pair of integers (h, k), where h is the height of the person and k is the number of people in front of this person who have a height greater than or equal to h. Write an algorithm to reconstruct the queue.

Example

Input:
[[7,0], [4,4], [7,1], [5,0], [6,1], [5,2]]

Output:
[[5,0], [7,0], [5,2], [6,1], [4,4], [7,1]]

*/

function reconstructQueue(people) {
  const sorted = people.sort((a, b) => {
    if (b[0] - a[0] == 0) {
      return a[1] - b[1];
    }

    return b[0] - a[0];
  });
  const ans = [];

  sorted.forEach((person) => {
    ans.splice(person[1], 0, person);
  });

  return ans;
}

/*

Approach :

First sort the input array people in such a way that, persons are sorted in descending order of their height, and if multiple persons have same height, then they will be sorted in ascending order of index k. So input array [[7,0], [4,4], [7,1], [5,0], [6,1], [5,2]] will become [[7,0], [7,1], [6,1], [5,0], [5,2], [4,4]]

Next iterate over the sorted array people and add the person people[i] at index people[i][1] of the list result, this solves the problem automagically.

Lets see an e.g.

Input array : [[7,0], [4,4], [7,1], [5,0], [6,1], [5,2]]
After sorting : [[7,0], [7,1], [6,1], [5,0], [5,2], [4,4]]

Next lets iterate over sorted array and add people[i] at index people[i][1] of list result
result => [[7,0]]
result => [[7,0], [7,1]]
result => [[7,0], [6,1], [7,1]]
result => [[5,0], [7,0], [6,1], [7,1]]
result => [[5,0], [7,0], [5,2], [6,1], [7,1]]
result => [[5,0], [7,0], [5,2], [6,1], [4,4], [7,1]]

*/

/*
Course Schedule

There are a total of numCourses courses you have to take, labeled from 0 to numCourses-1.

Some courses may have prerequisites, for example to take course 0 you have to first take course 1, which is expressed as a pair: [0,1]

Given the total number of courses and a list of prerequisite pairs, is it possible for you to finish all courses?

 

Example 1:

Input: numCourses = 2, prerequisites = [[1,0]]
Output: true
Explanation: There are a total of 2 courses to take. 
             To take course 1 you should have finished course 0. So it is possible.
Example 2:

Input: numCourses = 2, prerequisites = [[1,0],[0,1]]
Output: false
Explanation: There are a total of 2 courses to take. 
             To take course 1 you should have finished course 0, and to take course 0 you should
             also have finished course 1. So it is impossible.

*/

var canFinish = function (numCourses, prerequisites) {
  const graph = {};

  let count = 0;

  for (let i = 0; i < numCourses; i++) {
    graph[i] = 0;
  }

  // create a grath representation with in-degree for each vertex
  for (let i = 0; i < prerequisites.length; i++) {
    graph[prerequisites[i][0]] = graph[prerequisites[i][0]] + 1;
  }

  const stack = [];
  for (let i = 0; i < Object.keys(graph).length; i++) {
    if (graph[i] == 0) {
      stack.push(i);
    }
  }

  while (stack.length) {
    const vertex = stack.pop();
    count++;

    for (let i = 0; i < prerequisites.length; i++) {
      if (prerequisites[i][1] == vertex) {
        graph[prerequisites[i][0]] = graph[prerequisites[i][0]] - 1;

        if (graph[prerequisites[i][0]] == 0) {
          stack.push(prerequisites[i][0]);
        }
      }
    }
  }

  return count == numCourses;
};
