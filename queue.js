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
    let newNode = new Node(val);

    if(this.first === null) {
      this.first = newNode;
      this.last = this.first;
      this.size++;
    } 
    else {
      let last = this.last;
      this.last = newNode;
      last.next = this.last;
      this.size++;
    }
  }

  /** dequeue(): remove the node from the start of the queue
   * and return its value. Should throw an error if the queue is empty. */

  dequeue() {
    if(this.size === 0) {
      throw new error("Queue is empty");
    }
    let first = this.first;

    if(this.size === 1) {
      this.first = null;
    } else {
      this.first = first.next;
    }
    this.size--;

    return first.val;
  }

  /** peek(): return the value of the first node in the queue. */

  peek() {
    return this.first.val;
  }

  /** isEmpty(): return true if the queue is empty, otherwise false */

  isEmpty() {
    if(this.size > 0) return false;
    return true;
  }
}

module.exports = Queue;
