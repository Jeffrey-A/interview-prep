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

/*
Implement merge sort
*/

function mergeSort(arr) {
  if (arr.length > 1) {
    const mid = Math.floor(arr.length / 2);
    const left = arr.slice(0, mid);
    const right = arr.slice(mid, arr.length);

    mergeSort(left);
    mergeSort(right);

    let i = 0;
    let j = 0;
    let k = 0;
    // copy data in the temp arrays(left and right) to the original
    while (i < left.length && j < right.length) {
      if (left[i] < right[j]) {
        arr[k] = left[i];
        i++;
      } else {
        arr[k] = right[j];
        j++;
      }
      k++;
    }

    // One list might be greater than the other, so copy the remainder elements
    while (i < left.length) {
      arr[k] = left[i];
      i++;
      k++;
    }

    while (j < right.length) {
      arr[k] = right[j];
      j++;
      k++;
    }
  }
  return arr;
}

console.log(mergeSort([4, 2, 1, 3]));

/*
Word Search

Given a 2D board and a word, find if the word exists in the grid.

The word can be constructed from letters of sequentially adjacent cells, where "adjacent" cells are horizontally or vertically neighboring. 
The same letter cell may not be used more than once.
*/

function exist(board, word) {
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      // find the starting character and do a depth first search
      if (board[i][j] == word[0] && dfs(board, i, j, 0, word)) {
        return true;
      }
    }
  }
  return false;
}

function dfs(board, row, col, count, word) {
  if (count == word.length) {
    return true;
  }

  const isOutOfBounds =
    row < 0 || row >= board.length || col < 0 || col >= board[row].length;

  if (isOutOfBounds || board[row][col] != word[count]) {
    return false;
  }

  // The same letter cell may not be used more than once.
  const currCell = board[row][col];
  board[row][col] = " ";

  const found =
    dfs(board, row + 1, col, count + 1, word) ||
    dfs(board, row - 1, col, count + 1, word) ||
    dfs(board, row, col + 1, count + 1, word) ||
    dfs(board, row, col - 1, count + 1, word);

  board[row][col] = currCell;
  return found;
}

/*
Remove Comments
*/

function removeComments(source) {
  if (!source || !source.length) {
    return source;
  }

  let cleanWord;
  const blockCommentStack = [];
  const ans = [];

  for (let i = 0; i < source.length; i++) {
    const line = source[i];

    if (!blockCommentStack.length) {
      cleanWord = [];
    }

    for (let j = 0; j < line.length; j++) {
      if (
        j + 1 < line.length &&
        line[j] + line[j + 1] == "/*" &&
        !blockCommentStack.length
      ) {
        blockCommentStack.push("/*");
        j++;
        continue;
      } else if (
        j + 1 < line.length &&
        line[j] + line[j + 1] == "*/" &&
        blockCommentStack.length
      ) {
        blockCommentStack.pop();
        j++;
        continue;
      } else if (
        !blockCommentStack.length &&
        j + 1 < line.length &&
        line[j] + line[j + 1] == "//"
      ) {
        break;
      } else if (!blockCommentStack.length) {
        cleanWord.push(line[j]);
      }
    }

    if (cleanWord && cleanWord.length && !blockCommentStack.length) {
      ans.push(cleanWord.join(""));
    }
  }

  return ans;
}

/*

Trapping Rain Water

Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining.
*/

function trap(height) {
  let left_max = 0;
  let right_max = 0;
  let left = 0;
  let right = height.length - 1;
  let ans = 0;

  while (left < right) {
    if (height[left] < height[right]) {
      left_max > height[left]
        ? (ans += left_max - height[left])
        : (left_max = height[left]);
      left++;
    } else {
      right_max > height[right]
        ? (ans += right_max - height[right])
        : (right_max = height[right]);
      right--;
    }
  }

  return ans;
}

/*
Spiral Matrix

Given a matrix of m x n elements (m rows, n columns), return all elements of the matrix in spiral order.

Input:
[
 [ 1, 2, 3 ],
 [ 4, 5, 6 ],
 [ 7, 8, 9 ]
]
Output: [1,2,3,6,9,8,7,4,5]
*/

function spiralOrder(matrix) {
  if (!matrix || matrix.length == 0) {
    return matrix;
  }

  if (matrix.length == 1) {
    return matrix[0];
  }

  let top = 0;
  let left = 0;
  let right = matrix[0].length - 1;
  let bottom = matrix.length - 1;
  let size = matrix.length * matrix[0].length;
  const ans = [];

  while (ans.length < size) {
    for (let i = left; i <= right && ans.length < size; i++) {
      ans.push(matrix[top][i]);
    }
    top++;

    for (let i = top; i <= bottom && ans.length < size; i++) {
      ans.push(matrix[i][right]);
    }
    right--;

    for (let i = right; i >= left && ans.length < size; i--) {
      ans.push(matrix[bottom][i]);
    }
    bottom--;

    for (let i = bottom; i >= top && ans.length < size; i--) {
      ans.push(matrix[i][left]);
    }
    left++;
  }
  return ans;
}
