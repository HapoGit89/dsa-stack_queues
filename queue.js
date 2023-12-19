/** Node: node for a queue. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** Queue: chained-together nodes where you can
 *  remove from the front or add to the back. */

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  /** enqueue(val): add new value to end of the queue. Returns undefined. */

  enqueue(val) {
    const newNode = new Node(val)
    if (this.first == null) {
      this.first = newNode
      this.last = newNode
      this.size += 1
    }
    else {
      const oldLast = this.last
      this.last = newNode
      oldLast.next = newNode
      this.size += 1
    }
  }

  /** dequeue(): remove the node from the start of the queue
   * and return its value. Should throw an error if the queue is empty. */

  dequeue() {
    if (this.size == 0) {
      throw Error("queue is empty")
    }
    if (this.first == this.last) {
      const returnVal = this.first.val
      this.first = null
      this.last = null
      this.size = 0
      return returnVal
    }
    else {
      const returnVal = this.first.val
      const secondNode = this.first.next
      this.first.next = null
      this.first = secondNode
      this.size = this.size - 1
      return returnVal
    }
  }

  /** peek(): return the value of the first node in the queue. */

  peek() {

    return this.first.val

  }

  /** isEmpty(): return true if the queue is empty, otherwise false */

  isEmpty() {
    if (this.size == 0) {
      return true
    }
    else {
      return false
    }

  }
}

module.exports = Queue;
