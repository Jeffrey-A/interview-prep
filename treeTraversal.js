class Node {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class Tree {
  constructor(node) {
    this.root = node;
  }

  preOrder() {
    // root, left, right
    const ans = [];
    this.pre_helper(this.root, ans);
    return ans;
  }

  pre_helper(node, ans) {
    if (!node) {
      return null;
    }

    ans.push(node.val);
    this.pre_helper(node.left, ans);
    this.pre_helper(node.right, ans);
  }

  inOrder() {
    // left, root, right
    const ans = [];
    this.in_helper(this.root, ans);
    return ans;
  }

  in_helper(node, ans) {
    if (!node) {
      return null;
    }

    this.in_helper(node.left, ans);
    ans.push(node.val);
    this.in_helper(node.right, ans);
  }

  postOrder() {
    // left, right, root
    const ans = [];
    this.post_helper(this.root, ans);
    return ans;
  }

  post_helper(node, ans) {
    if (!node) {
      return null;
    }

    this.post_helper(node.left, ans);
    this.post_helper(node.right, ans);
    ans.push(node.val);
  }

  bfs() {
    const nodes = [];
    const ans = new Set();

    this.bfs_helper(this.root, nodes);

    nodes.forEach((node) => {
      ans.add(node.val);

      if (node.left) {
        ans.add(node.left.val);
      }

      if (node.right) {
        ans.add(node.right.val);
      }
    });

    return Array.from(ans);
  }

  bfs_helper(root, nodes) {
    
    if (!root) {
      return null;
    }
    nodes.push(root);
    this.bfs_helper(root.left, nodes);
    this.bfs_helper(root.right, nodes);
  }
}

/*
#     a
#    / \
#   b   c
#  / \   \
# d   e   f
*/

const n2 = new Node('b', new Node('d'), new Node('e'));

const n3 = new Node('c', null, new Node('f'));

const root = new Node('a', n2, n3);

const tree = new Tree(root);
console.log('pre', tree.preOrder()); // a, b, d, e, c, f
console.log('in', tree.inOrder()); // d, b, e, a, c, f
console.log('post', tree.postOrder()); // d, e, b, f, c, a
console.log('bfs', tree.bfs());
