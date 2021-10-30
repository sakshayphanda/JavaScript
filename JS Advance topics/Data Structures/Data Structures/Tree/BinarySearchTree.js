/**
 * Complexity
 * O(log n) --> Best case/ Average case
 * O (n) --> Worst case
 *
 * As the number of nodes doubles only 1 step is increased therefore its complexity
 * is log n or (log base 2 (n))
 *
 * example --> log2(32) = 32/2 = 16, 16/2 = 8, 8/2 = 4, 4/2 = 2, 2/2 = 1.
 * So it took 5 steps to reach 1.
 */

const Queue = require('../Queue/Queue');

class BSTNode {
	constructor(value) {
		this.value = value;
		this.left = null;
		this.right = null;
	}
}

class BinarySearchTree {
	constructor() {
		this.root = null;
	}

	insertion(value) {
		const newNode = new BSTNode(value);
		if (!this.root) {
			this.root = newNode;
		} else {
			let current = this.root;
			while (current) {
				if (value < current.value) {
					if (!current.left) {
						current.left = newNode;
						break;
					} else {
						current = current.left;
					}
				} else {
					if (!current.right) {
						current.right = newNode;
						break;
					} else {
						current = current.right;
					}
				}
			}
		}
	}

	find(value) {
		if (value === this.root.value) {
			return this;
		} else {
			let current = this.root;
			while (current) {
				if (value === current.value) return current;
				if (value < current.value) {
					if (!current.left) {
						console.log('Not Found!!');
						break;
					} else {
						current = current.left;
					}
				} else {
					if (!current.right) {
						console.log('Not Found!!');
						break;
					} else {
						current = current.right;
					}
				}
			}
		}
	}

	breadthFirstSearch() {
		const queue = new Queue();
		const visited = [];
		if (!this.root) {
			return 'Nothing inside';
		} else {
			let current = this.root;
			queue.enqueue(current);
			while (queue.size) {
				current = queue.dequeue();
				visited.push(current.value);
				if (current.left) {
					queue.enqueue(current.left);
				}
				if (current.right) {
					queue.enqueue(current.right);
				}
			}
		}
		return visited;
	}
	DFSPreOrder() {
		var data = [];
		function traverse(node) {
			data.push(node.value);
			if (node.left) traverse(node.left);
			if (node.right) traverse(node.right);
		}
		traverse(this.root);
		return data;
	}
	DFSPostOrder() {
		var data = [];
		function traverse(node) {
			if (node.left) traverse(node.left);
			if (node.right) traverse(node.right);
			data.push(node.value); // only difference is this line order from preorder
		}
		traverse(this.root);
		return data;
	}
	DFSInOrder() {
		var data = [];
		function traverse(node) {
			if (node.left) traverse(node.left);
			data.push(node.value);
			if (node.right) traverse(node.right);
		}
		traverse(this.root);
		return data;
	}
}

let bst = new BinarySearchTree();

bst.insertion(233);
bst.insertion(100);
bst.insertion(333);
bst.insertion(255);
bst.insertion(363);
// console.log(bst);

console.log(bst.breadthFirstSearch());
