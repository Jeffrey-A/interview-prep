/*
Maximum Depth of Binary Tree
Given a binary tree, find its maximum depth.
The maximum depth is the number of nodes along the longest path from the root node down to
the farthest leaf node.
Note: A leaf is a node with no children.

Source: https://leetcode.com/problems/maximum-depth-of-binary-tree/

*/

function maxDepth(root) {
    if(root == null) return 0;
    if(root.left == null && root.right == null) return 1;
    
    return helper(root, 1);
};


function helper(root, depth){
    if(root == null){
        return depth-1;
    }
    
    return Math.max(helper(root.left, depth+1), helper(root.right, depth+1))
}