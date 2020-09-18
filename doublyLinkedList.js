class Node {
  constructor(val, prev = null, next = null) {
    this.val = val;
    this.prev = prev;
    this.next = next;
  }
}

class DoublyLinkedList {
  constructor(node) {
    this.head = node;
    this.tail = node;
  }

  print() {
    let curr = this.head;

    while (curr) {
      console.log(curr.val);
      curr = curr.next;
    }
  }

  printReverse() {
    let curr = this.tail;

    while (curr) {
      console.log(curr.val);
      curr = curr.prev;
    }
  }

  append(val) {
    const newNode = new Node(val);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
  }

  insertAt(pos, x) {
    const newNode = new Node(x);

    if (pos === 0) {
      this.head.prev = newNode;
      newNode.next = this.head;
      this.head = newNode;
    }

    let curr = this.head;
    let index = 0;

    while(curr) {
      if (index === pos) {
        curr.prev.next = newNode;
        newNode.next = curr;
        newNode.prev = curr.prev;
        curr.prev = newNode;
        return this.head;
      }

      curr = curr.next;
      index++;
    }
  }

  deleteVal(val) {
    if (this.head && this.head.val === val) {
      if (this.head.next) {
        this.head.next.prev = null;
        this.head = this.head.next;
      } else {
        this.head = null;
      }
    } else if (this.tail && this.tail.val === val) {
      this.tail.prev.next = null;
      this.tail = this.tail.prev;
    } else {
      let curr = this.head;

      while (curr) {
        if (curr.val == val) {
          let prev = curr.prev;
          let next = curr.next;

          prev.next = next;
          next.prev = prev;

          curr = next;
        }
        curr = curr.next;
      }
    }
  }
}

const d = new DoublyLinkedList();
d.append(1);
d.append(2);
d.append(3);
d.append(4);
d.insertAt(3, 100);

// d.deleteVal(2);
// d.deleteVal(1);

d.print();
d.printReverse();
