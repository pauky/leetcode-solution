/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
    if (nums.length < 3) return []
    const resSet = new Set()
    for (let i = 0; i < nums.length - 2; i++) {
        for (let j = i + 1; j < nums.length - 1; j++) {
            for (let k = j + 1; k < nums.length; k++) {
                if (nums[i] + nums[j] + nums[k] === 0) {
                    // 去重
                    resSet.add([nums[i], nums[j], nums[k]].sort().join('*'))
                }
            }
        }
    }
    const res = []
    resSet.forEach(r => {
        res.push(r.split('*'))
    })
    return res
};
