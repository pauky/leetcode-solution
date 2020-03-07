/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function (heights) {
    if (heights.length === 0) return 0
    if (heights.length === 1) return heights[0]
    let maxArea = 0
    for (let i = 0; i < heights.length; i++) {
        let minHeight = Infinity
        for (let j = i; j < heights.length; j++) {
            minHeight = Math.min(minHeight, heights[j])
            maxArea = Math.max(maxArea, (j - i + 1) * minHeight)
        }
    }
    return maxArea
};
