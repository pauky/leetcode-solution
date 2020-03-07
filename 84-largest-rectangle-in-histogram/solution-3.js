/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function (heights) {
    if (heights.length === 0) return 0
    if (heights.length === 1) return heights[0]
    let maxArea = 0
    let stack = [-1]
    let current

    for (let i = 0; i < heights.length; i++) {
        while (stack.length > 1 && heights[stack[stack.length - 1]] > heights[i]) {
            current = stack.pop()
            maxArea = Math.max(heights[current] * (i - stack[stack.length - 1] - 1), maxArea)
        }
        stack.push(i)
    }

    while (stack.length > 1) {
        current = stack.pop()
        maxArea = Math.max(heights[current] * (heights.length - stack[stack.length - 1] - 1), maxArea)
    }

    return maxArea
};