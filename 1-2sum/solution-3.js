/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    const hash = {}
    let j
    for (let i = 0; i < nums.length; i++) {
        j = hash[target - nums[i]]
        if (Number.isInteger(j) && i !== j) {
            return [i, j]
        }
        hash[nums[i]] = i
    }
}