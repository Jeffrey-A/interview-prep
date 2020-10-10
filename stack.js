class MaxStack {
  constructor() {
    this.stack = [];
    this.maxValues = [];
  }

  push(x) {
    this.stack.push(x);
  }

  pop() {
    return this.stack.pop();
  }

  top() {
    return this.stack[this.stack.length - 1];
  }

  peekMax() {
    return Math.max(...this.stack);
  }

  popMax() {
    const max = Math.max(...this.stack);
    const maxIndex = this.stack.lastIndexOf(max);
    this.stack.splice(maxIndex, 1);
    return max;
  }
}
