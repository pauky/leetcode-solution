/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
    let j = 0
    let tmp
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            tmp = nums[j]
            nums[j] = nums[i]
            nums[i] = tmp
            j++
        }
    }
};