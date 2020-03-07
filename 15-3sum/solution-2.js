/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
    if (nums.length < 3) return []
    const hash = {}
    const res = []
    let target = 0
    for (let i = 0; i < nums.length; i++) {
        hash[nums[i]] = i
    }
    for (let i = 0; i < nums.length - 1; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            target = -(nums[i] + nums[j])
            const r = [nums[i], nums[j], target]
            if (typeof hash[target] === 'number' && hash[target] > i && hash[target] > j) {
                res.push(r)
            }
        }
    }
    // 去重
    const set = new Set()
    const result = []
    res.forEach(item => {
        const k = item.sort().join('*')
        if (!set.has(k)) {
            set.add(k)
            result.push(item)
        }
    })
    return result
};
