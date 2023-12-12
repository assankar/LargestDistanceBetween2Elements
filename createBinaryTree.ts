function testCreateBinaryTree() {
    /* Given a 2 dimension array with values
       [parent, current, isLeft]
        Create the binary tree and return the root Node

        Ex// [[2, 5, 0], [1, 2, 1], [1, 3, 0]] should return 1. 
    */
    let testA = [[2, 5, 0], [1, 2, 1], [1, 3, 0]]
    const rootTreeNodeA: TreeNode = createBinaryTree(testA);
    console.log(`The Value of the root node is ${rootTreeNodeA.val} and should return 1`);

};

function createBinaryTree(treeArr: number[][]): TreeNode {
    const rootSet: Set<number> = new Set<number>();
    const treeMap: Map<number, TreeNode> = new Map<number, TreeNode>();

    for(let row of treeArr){
        let currentNode:TreeNode;
        let parentNode:TreeNode;

        if(treeMap.has(row[1])){
            currentNode = treeMap.get(row[1]);
        } else {
            currentNode = new TreeNode(row[1], null, null);
            treeMap.set(row[1], currentNode);
        }
        if(treeMap.has(row[0])){
            parentNode = treeMap.get(row[0]);
        } else {
            parentNode = new TreeNode(row[0], null, null);
            treeMap.set(row[0], parentNode);
            rootSet.add(row[0]);
        }

        if (rootSet.has(row[1])){
            rootSet.delete(row[1]);
        }
        if(row[2] == 1) {
            parentNode.left = currentNode;
        } else {
            parentNode.right = currentNode;
        }

    }
    for (const key of rootSet) {
        return treeMap.get(key);
    }
}

class TreeNode {
    val: number
    left: TreeNode
    right: TreeNode

    constructor(val?: number, left?: TreeNode, right?:TreeNode){
        if (val === undefined){
            this.val = 0
        } else {
            this.val = val
        }
        if (left === undefined){
            this.left = null
        } else {
            this.left = left
        }
        if (right === undefined){
            this.right = null
        } else {
            this.right = right
        }
    }
}

testCreateBinaryTree();