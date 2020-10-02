/* 
Search in a Binary Search Tree
Given the root node of a binary search tree (BST) and a value. You need to find the node in the
BST that the node's value equals the given value. Return the subtree rooted with that node. If
such node doesn't exist, you should return NULL.
For example,
Example:
Given the tree:
 4
/ \
2 6
/ \
1 3
And the value to search: 2
You should return this subtree:
2
/ \
1 3
In the example above, if we want to search the value 5, since there is no node with value 5, we
should return NULL.
*/

function searchBST(root, val) {
  if (!root) return null;

  if (root.val == val) {
    return root;
  }

  if (val < root.val) {
    return searchBST(root.left, val);
  } else {
    return searchBST(root.right, val);
  }
}

/* 
Insert into a Binary Search Tree
For example,
Given the tree:
 4
/ \
2 7
/ \
1 3
And the value to insert: 5
You can return this binary search tree:

     4
   /  \
  2    7
 / \  /
1  3 5
*/
function insertIntoBST(root, val) {
  if (!root) {
    return new TreeNode(val);
  } else if (val < root.val) {
    root.left = insertIntoBST(root.left, val);
  } else if (val > root.val) {
    root.right = insertIntoBST(root.right, val);
  }
  return root;
}

/* Balance a Binary Search Tree

Given a binary search tree, return a balanced binary search tree with the same node values.

A binary search tree is balanced if and only if the depth of the two subtrees of every node never differ by more than 1.

If there is more than one answer, return any of them.

*/

function balanceBST(root) {
  const nodes = [];
  inOrderTraversal(root, nodes);
  return createBST(nodes);
}

function createBST(nodes) {
  if (!nodes.length) return null;

  const mid = Math.floor((nodes.length - 1) / 2);

  const node = new TreeNode(nodes[mid]);

  node.left = createBST(nodes.slice(0, mid));
  node.right = createBST(nodes.slice(mid + 1));

  return node;
}

function inOrderTraversal(node, nodes) {
  if (!node) return;

  inOrderTraversal(node.left, nodes);
  nodes.push(node.val);
  inOrderTraversal(node.right, nodes);
}

/* 
Given a binary tree, determine if it is a valid binary search tree (BST).

Assume a BST is defined as follows:

The left subtree of a node contains only nodes with keys less than the node's key.
The right subtree of a node contains only nodes with keys greater than the node's key.
Both the left and right subtrees must also be binary search trees.
*/

function isValidBST(root) {
  const nodes = [];

  inOrder(root, nodes);
  console.log(nodes);

  let prev = 0;
  let next = 1;

  while (next < nodes.length) {
    if (nodes[prev] >= nodes[next]) {
      return false;
    }
    prev++;
    next++;
  }

  return true;
};

function inOrder(node, nodes) {
  if (!node) return null;

  inOrder(node.left, nodes);
  nodes.push(node.val);
  inOrder(node.right, nodes);
}
