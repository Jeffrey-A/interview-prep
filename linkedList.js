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
  oddEven() {
    let odd = this.head;
    let even = odd.next;

    let evenHead = even;

    while (even && even.next) {
      odd.next = even.next;
      odd = odd.next;

      even.next = odd.next;
      even = even.next;
    }

    odd.next = evenHead;
  }

  isPalindrome() {
    if (this.head == null) return this.head;
    // fill the stack
    let [node, stack] = [this.head, []];
    while (node) {
      stack.push(node.val);
      node = node.next;
    }
    // play backwards
    for (let i = 0; i < stack.length; i++) {
      if (stack[i] != stack[stack.length - 1 - i]) return false;
    }
    return true;
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

/* 
Add Two Numbers

You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.

*/

function addTwoNumbers(l1, l2) {
  const num1 = convertLinkedListToNum(l1);
  const num2 = convertLinkedListToNum(l2);

  const answer = reverseStr(num1 + num2 + "");

  const node = new ListNode(answer[0]);
  let lastNode = node;

  for (let i = 1; i < answer.length; i++) {
    const newNode = new ListNode(answer[i]);
    lastNode.next = newNode;
    lastNode = lastNode.next;
  }

  return node;
}

function reverseStr(str) {
  return str.split("").reverse().join("");
}

function convertLinkedListToNum(node) {
  let numRep = "";
  let curr = node;
  while (curr) {
    numRep += curr.val;
    curr = curr.next;
  }
  return BigInt(reverseStr(numRep), 10);
}
