class Node {
	constructor(val, left=null, right=null) {
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
		if(!node) {
			return null;
		}

		this.in_helper(node.left, ans);
		ans.push(node.val);
		this.in_helper(node.right, ans);
	}

	postOrder() {

	}
}


const n2 = new Node(2, new Node(3))
const root = new Node(1, null, n2)

const tree = new Tree(root);
console.log(tree.preOrder());
console.log(tree.inOrder());


