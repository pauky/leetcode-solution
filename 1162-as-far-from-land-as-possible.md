# 1162. 地图分析
> 你现在手里有一份大小为 N x N 的『地图』（网格） grid，上面的每个『区域』（单元格）都用 0 和 1 标记好了。其中 0 代表海洋，1 代表陆地，你知道距离陆地区域最远的海洋区域是是哪一个吗？请返回该海洋区域到离它最近的陆地区域的距离。

我们这里说的距离是『曼哈顿距离』（ Manhattan Distance）：(x0, y0) 和 (x1, y1) 这两个区域之间的距离是 |x0 - x1| + |y0 - y1| 。

如果我们的地图上只有陆地或者海洋，请返回 -1。

[题目地址](https://leetcode-cn.com/problems/as-far-from-land-as-possible)

## 解法1：多源BFS搜索
### 思路
* 将多个陆地都作为源点，分别进行BFS搜索
* 每次扩散到海洋节点时，用节点值记录与出发点的距离，也相当于标记了节点被访问，防止死循环
* 最后扩散到的海洋就是距离陆地最远的，相应的距离就是所求

### 代码
```js
/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxDistance = function(grid) {
    const n = grid.length
    const queue = []

    // 取出所有陆地的点放入队列
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] === 1) {
                queue.push([i, j])
            }
        }
    }

    // 都是陆地或都海洋
    if (!queue.length || queue.length === n * n) return -1


    // 从队列中的陆地开始进行BFS搜索
    const directions = [[0, 1], [1, 0], [0, -1], [-1, 0]]
    let point = null
    while(queue.length) {
        point = queue.shift()
        for (const p of directions) {
            const [x, y] = p
            const newX = point[0] + x
            const newY = point[1] + y
            if (newX >= n || newX < 0 || newY < 0 || newY >= n || grid[newX][newY] !== 0) {
                continue
            }
            // 标记海洋被访问，防止重复访问产生死循环
            // 并且将该节点与出发点的距离记录在节点值上
            grid[newX][newY] = grid[point[0]][point[1]] + 1
            queue.push([newX, newY])
        }
    }
    return grid[point[0]][point[1]] - 1
};
```

### 复杂度分析
* 时间复杂度：O(n^2), BFS会把所有格子都看一遍
* 空间复杂度：O(n^2), 当格子都是陆地时，队列初始长度就是n^2