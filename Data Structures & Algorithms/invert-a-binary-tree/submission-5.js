/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @return {TreeNode}
     */
    
    invertTree(root) {
        // Traverse the tree
        if(root !== null) {this.invertTree(root.left)}
        if(root !== null){this.invertTree(root.right)}
        if(root !== null){
            let temp = root.left;
            root.left = root.right;
            root.right = temp
        }
            return root;
    }
}
