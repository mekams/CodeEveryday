// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

 

// Example 1:

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

// Example 2:

// Input: nums = [3,2,4], target = 6
// Output: [1,2]

// Example 3:

// Input: nums = [3,3], target = 6
// Output: [0,1]

 

// Constraints:

//     2 <= nums.length <= 104
//     -109 <= nums[i] <= 109
//     -109 <= target <= 109
//     Only one valid answer exists.


let nums = [2,7,11,15], target = 18;

var twoSum = function(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                return [i, j];
            }
        }
    }
    console.log("No match found"); // Moved this outside the loops to handle no matches
    return undefined; // Explicitly returning undefined when no match is found
};

console.log(twoSum(nums, target)); // Test with target 1


// Follow-up: Can you come up with an algorithm that is less than O(n2) time complexity?


function optimisedSol(nums, target){
    const numMap = new Map();
    for (let i = 0 ; i<nums.length; i++){
       let findNum = target - nums[i];
        if(numMap.has(findNum)){
            return([numMap.get(findNum),i])
        }
        console.log(numMap.set(nums[i], i));
    }
    console.log("No match found");
    return undefined;
}

console.log(optimisedSol([1,2,3,4,5,6], 7));

