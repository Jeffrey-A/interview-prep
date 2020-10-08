/* 
Single Number

Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

Follow up: Could you implement a solution with a linear runtime complexity and without using extra memory?
*/

function singleNumber(nums) {
  const occ = {};

  nums.forEach((num) => {
    if (!occ[num]) {
      occ[num] = 1;
    } else {
      occ[num] = occ[num] + 1;
    }
  });

  const ans = Object.keys(occ).filter((key) => occ[key] == 1);

  if (ans.length) {
    return ans[0];
  }

  return -1;
}

/*
  And (&) --> is only true when both are true
  
  Or(|) --> is only false when both are false
  
  XOR (^) --> is only true they are different.
  
  
  also --> a ^ 0 --> a
  
  */
