/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
    if (nums.length < 3) return []
    const hash = {}
    const set = new Set()
    const res = []
    let target = 0
    for (let i = 0; i < nums.length; i++) {
        hash[nums[i]] = i
    }
    for (let i = 0; i < nums.length - 1; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            target = -(nums[i] + nums[j])
            const r = [nums[i], nums[j], target]
            const k = r.sort().join('*')
            if (typeof hash[target] === 'number' && hash[target] !== i && hash[target] !== j && !set.has(k)) {
                res.push(r)
                set.add(k)
            }
        }
    }
    return res
};
