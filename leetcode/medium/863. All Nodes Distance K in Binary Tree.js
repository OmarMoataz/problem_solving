/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} target
 * @param {number} K
 * @return {number[]}
 */

// incomplete solution
var distanceK = function(root, target, K) {
  dfs(root);
  
  return bfs(root, target, K);
};

var dfs = function(root) {
  if (!root) {
    return;
  }

  if (root.left) root.left.parent = root;
  if (root.right) root.right.parent = root;

  dfs(root.left);
  dfs(root.right);
}

var bfs = function(root, target, k) {
  let queue = [target];

  let currentLevel = 0;
  
  while(queue.length != 0) {
    let current = queue.shift();
    if (current != root) {
      if (current.left) queue.push(current.left);
      if (current.right) queue.push(current.right);
      if (current.parent && current.parent.val )
    } else {
      if (current.val > target.val && current.right) queue.push(current.right);
      else if (current.left) queue.push(current.left);
    }

    if (currentLevel == k) {
      return queue.map(item => item.val);
    }

    currentLevel++;
  }
}