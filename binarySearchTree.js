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
