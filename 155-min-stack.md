# 155. 最小栈
## 解法1：双栈且数据同步
### 思路
* 两个栈，一个放数据，一个放最小值
* 数据出栈时，栈里的最小值可能会发现变化，所以存最小值的栈也需要同步
* 在数据入栈时将当前的最小值推入最小值栈

### 代码
```js
/**
 * initialize your data structure here.
 */
var MinStack = function () {
    this.dataStack = []
    this.minStack = []
};

/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function (x) {
    this.dataStack.push(x)
    if (!this.minStack.length || this.getMin() > x) {
        this.minStack.push(x)
    } else {
        this.minStack.push(this.getMin())
    }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
    this.minStack.pop()
    return this.dataStack.pop()
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
    return this.dataStack[this.dataStack.length - 1]
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
    return this.minStack[this.minStack.length - 1]
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
```

### 复杂度分析
* 时间复杂度：O(1)
* 空间复杂度：O(n)，数据量为2n

## 解法2：双栈且数据不同步
### 思路
* 两个栈，一个放数据，一个放最小值
* 数据入栈时，判断入栈值是否小于或等于当前最小值，是则当该值推入最小值栈
* 数据出栈时，判断出栈值是否等于当前最小值，是则最小值删除栈顶元素

### 代码
```js
/**
 * initialize your data structure here.
 */
var MinStack = function () {
    this.dataStack = []
    this.minStack = []
};

/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function (x) {
    this.dataStack.push(x)
    if (!this.minStack.length || this.getMin() >= x) {
        this.minStack.push(x)
    }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
    const d = this.dataStack.pop()
    if (this.getMin() === d) {
        this.minStack.pop()
    }
    return d
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
    return this.dataStack[this.dataStack.length - 1]
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
    return this.minStack[this.minStack.length - 1]
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
```

### 复杂度分析
* 时间复杂度：O(1)
* 空间复杂度：O(n)，数据量小于或等于2n