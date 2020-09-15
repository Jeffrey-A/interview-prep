class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

class LinkedList {
  constructor(node) {
    this.head = node;
  }

  print() {
    let curr = this.head;
    while (curr) {
      console.log(curr.value);
      curr = curr.next;
    }
  }

  append(value) {
    const newNode = new Node(value);
    let curr = this.head;

    while (curr.next) {
      curr = curr.next;
    }
    curr.next = newNode;
  }

  reverse() {
    let first = null;
    let second = this.head;

    while (second) {
      let temp = second.next;

      second.next = first;
      first = second;
      second = temp;
    }

    this.head = first;
  }

  reverseRec() {
    this.head = this.__helper(this.head);
  }

  __helper(node) {
    if (!node || !node.next) {
      return node;
    }

    const newHead = this.__helper(node.next);
    node.next.next = node;
    node.next = null;
    return newHead;
  }

  remove(x) {
    if (this.head.value === x) {
      this.head = this.head.next;
      return;
    }

    let curr = this.head;

    while (curr) {
      if (curr.next && curr.next.value === x) {
        curr.next = curr.next.next;
      }

      curr = curr.next;
    }
  }
}

const n = new Node(1);
const ll = new LinkedList(n);
ll.append(2);
ll.append(3);
ll.append(4);
ll.append(5);
ll.print();
ll.reverse();
ll.print();
