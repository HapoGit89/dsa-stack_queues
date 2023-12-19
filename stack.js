/** Node: node for a stack. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** Stack: chained-together nodes where you can
 *  remove from the top or add to the top. */

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  /** push(val): add new value to end of the stack. Returns undefined. */

  push(val) {
    const newNode = new Node(val)
    if (this.size == 0) {
      this.first = newNode
      this.last = newNode
      this.size += 1
    }
    else {
      const oldFirst = this.first
      this.first = newNode
      newNode.next = oldFirst
      this.size += 1
    }

  }

  /** pop(): remove the node from the top of the stack
   * and return its value. Should throw an error if the stack is empty. */

  pop() {
    if (this.size == 0) {
      throw Error("queue is empty")
    }
    const returnVal = this.first.val
    if (this.first == this.last) {
      this.first = null
      this.last = null
      this.size = 0
      return returnVal
    }
    else {
      const oldSecond = this.first.next
      this.first.next = null
      this.first = oldSecond
      this.size = this.size - 1
      return returnVal
    }




  }

  /** peek(): return the value of the first node in the stack. */

  peek() {

    return (this.first.val)

  }

  /** isEmpty(): return true if the stack is empty, otherwise false */

  isEmpty() {

    if (this.size == 0) {
      return true
    }
    else {
      return false
    }



  }
}

module.exports = Stack;
