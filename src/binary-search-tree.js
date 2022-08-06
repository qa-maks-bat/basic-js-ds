// const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */
class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    getRoot() {
        let node = this.root;

        if (!node) {
            return node;
        }

        return node;
    }

    add(data) {
        this.root = addWithin(this.root, data);

        function addWithin(node, data) {
            if (!node) {
                return new Node(data);
            }

            if (data === node.data) {
                return node;
            }

            if (data < node.data) {
                node.left = addWithin(node.left, data);
            } else {
                node.right = addWithin(node.right, data);
            }
            return node;
        }
    }

    has(data) {
        return searchWithin(this.root, data);

        function searchWithin(node, data) {
            if (!node) {
                return false;
            }

            if (data < node.data) {
                return searchWithin(node.left, data);
            } else if (data > node.data) {
                return searchWithin(node.right, data);
            } else {
                return true;
            }
        }
    }

    find(data) {
        return showWithin(this.root, data);

        function showWithin(node, data) {
            if (!node) {
                return null;
            }

            if (data < node.data) {
                return showWithin(node.left, data);
            } else if (data > node.data) {
                return showWithin(node.right, data);
            } else {
                return node;
            }
        }
    }

    remove(data) {
        this.root = removeNode(this.root, data);

        function removeNode(node, data) {
            if (!node) {
                return null;
            }

            if (data < node.data) {
                node.left = removeNode(node.left, data);
                return node;
            } else if (data > node.data) {
                node.right = removeNode(node.right, data);
                return node;
            } else {
                if (!node.left && !node.right) {
                    node = null;
                    return node;
                }

                if (!node.left) {
                    node = node.right;
                    return node;
                }

                if (!node.right) {
                    node = node.left;
                    return node;
                }

                let minFromRight = node.right;

                while (minFromRight.left) {
                    minFromRight = minFromRight.left;
                }

                node.data = minFromRight.data;
                node.right = removeNode(node.right, minFromRight.data);

                return node;
            }
        }
    }

    min() {
        if (!this.root) {
            return null;
        }

        let node = this.root;

        while (node.left) {
            node = node.left;
        }

        return node.data;
    }

    max() {
        if (!this.root) {
            return null;
        }

        let node = this.root;

        while (node.right) {
            node = node.right;
        }

        return node.data;
    }
}

module.exports = {
    BinarySearchTree,
};
