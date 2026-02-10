class ListNode {
    constructor (val) {
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}
var MyStack = function() {
    this.head = null;
    this.tail = null;
    // this.size = 0;
};

/** 
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function(x) {
    const node = new ListNode(x)
    if (this.empty()) {
        this.head = node;
        this.tail = node;
        // return this.head;
    }

    this.tail.next = node;
    node.prev = this.tail;
    this.tail = node;
    
    
    // return this.tail;
};

/**
 * @return {number}
 */
MyStack.prototype.pop = function() {
    const value = this.tail.val;

    if (this.head === this.tail) {
        this.head = null;
        this.tail = null;
        return value;
    } 

    this.tail = this.tail.prev;

    
    return value;
  

};

/**
 * @return {number}
 */
MyStack.prototype.top = function() {
    if (!this.empty()) return this.tail.val;
    return null;
};

/**
 * @return {boolean}
 */
MyStack.prototype.empty = function() {
    return this.head === null;
    //return this.size === 0;
};



// var obj = new MyStack()
// console.log(obj.push(1)); // true
// console.log(obj.push(2)); // null
// console.log(obj.top()); // 1
// console.log(obj.pop()); // 2
// console.log(obj.empty()); // false

// var param_2 = obj.pop()
// var param_3 = obj.top()
// var param_4 = obj.empty()


 