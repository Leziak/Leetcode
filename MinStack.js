/**
 * initialize your data structure here.
 */
var MinStack = function(node, next = null) {
    this.node = node
    this.next = next;
};

/**
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
    let node = this.next;
    while(node !== null) node = node.next
    node = new MinStack(x)
};

MinStack.prototype.get = function(x) {
    let node = this.next;
    for(let i = 0;i < x; i++){
        node = node.next
    }
    return node;
}

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {

};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {

};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {

};

let stack = new MinStack(1);

stack.push(2);
stack.push(3);

console.log(stack.get(1));

console.log(stack);

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = Object.create(MinStack).createNew()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */