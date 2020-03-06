/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
    let max = 0
    let area = 0
    for (let i = 0, j = height.length - 1; i < j;) {
        area = (j - i) * Math.min(height[i], height[j])
        max = Math.max(area, max)
        if (height[i] < height[j]) {
            i++
        } else {
            j--
        }
    }
    return max
}