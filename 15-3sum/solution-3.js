/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
    const res = []
    if (nums.length < 3) return res
    nums.sort((a, b) => a - b)
    for (let k = 0; k < nums.length; k++) {
        if (nums[k] > 0) break
        if (k > 0 && nums[k] === nums[k - 1]) continue
        let i = k + 1
        let j = nums.length - 1
        while (i < j) {
            const r = nums[i] + nums[j] + nums[k]
            if (r === 0) {
                res.push([nums[i], nums[j], nums[k]])
                while (i < j && nums[i] === nums[i + 1]) {
                    i++
                }
                while (i < j && nums[j] === nums[j - 1]) {
                    j--
                }
                i++
                j--
            } else if (r < 0) {
                i++
            } else if (r > 0) {
                j--
            }
        }
    }
    return res
};

console.log(threeSum([-1, 0, 1, 2, -1, -4]))