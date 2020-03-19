# 36. 有效的数独
题目：https://leetcode-cn.com/problems/valid-sudoku/

## 解法1
### 思路
* 遍历数独判断下面三个条件，所有已填数字满足则数独有效；
* 行中没有重复的数字；
* 列中没有重复的数字；
* 3 x 3 子数独内没有重复的数字；

### 代码
```js
/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
    const rows = Array(9).fill(0).map(() => new Set())
    const cols = Array(9).fill(0).map(() => new Set())
    const boxes = Array(9).fill(0).map(() => new Set())
    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            let char = board[i][j]
            if (char !== '.') {
                let boxIndex = parseInt(parseInt(i / 3) * 3 + j / 3)
                if (rows[i].has(char) || cols[j].has(char) || boxes[boxIndex].has(char)) {
                    return false
                }
                rows[i].add(char)
                cols[j].add(char)
                boxes[boxIndex].add(char)
            }
        }
    }
    return true
};
```