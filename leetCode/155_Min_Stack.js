// працює повільно
var MinStack = function() {
    // ["MinStack","push","push","push","getMin","pop","top","getMin"]
    // [[],[-2],[0],[-3],[],[],[],[]]
    this.stack = [];
    this.length = this.stack.length;
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {
    this.stack.push(val);

};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    this.stack.pop();
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    this.length = this.stack.length;

    return this.stack[this.length - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    return Math.min(...this.stack);
};

//2

// var MinStack = function() {
//     // ["MinStack","push","push","push","getMin","pop","top","getMin"]
//     // [[],[-2],[0],[-3],[],[],[],[]]
//     this.stack = [];
//     this.length = this.stack.length;
//     this.minStack = [];
// };

// /** 
//  * @param {number} val
//  * @return {void}
//  */
// MinStack.prototype.push = function(val) {
//     this.stack.push(val);
//     this.minStack[0] < val 
//     ? this.minStack.unshift(val)
//     : this.minStack.push(val);

// };

// /**
//  * @return {void}
//  */
// MinStack.prototype.pop = function() {
//     this.stack.pop();
// };

// /**
//  * @return {number}
//  */
// MinStack.prototype.top = function() {
//     this.length = this.stack.length;

//     return this.stack[this.length - 1];
// };

// /**
//  * @return {number}
//  */
// MinStack.prototype.getMin = function() {
//     return this.minStack[this.minStack.length - 1]
// };


// Input
// ["MinStack","push","push","push","getMin","pop","top","getMin"]
// [[],[-2],[0],[-3],[],[],[],[]]

// Output
// [null,null,null,null,-3,null,0,-2]

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */