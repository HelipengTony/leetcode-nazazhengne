/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var preorderTraversal = function (root) {
    var returnArray = [];
    var preorderNode = function (node) {
        if (node) {
            returnArray.push(node.val);
            preorderNode(node.left);
            preorderNode(node.right);
        }
    }
    preorderNode(root);
    return returnArray;
};