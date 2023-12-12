 function testBST() {
    const arr:number[] = [1,2,3,4,5,6,10,7,9,8]
    const arr2:number[] = [2,4,5,7,6];

    let root: TreeNode = new TreeNode();
    let len = arr.length;
    root = constructBST(arr, 0, len-1, root);
    
    console.log(isValidBST(root));

    let root2: TreeNode = new TreeNode();
    let len2 = arr2.length;
    root2 = constructBST(arr2, 0, len2-1, root);

    console.log(isValidBST(root2));

    // console.log(arr.length == dfs(root));

 };

function isValidBST(root:TreeNode){
    if(root === undefined){
        return true;
    }
    let leftVal = true;
    let rightVal = true;
    if(root.left !== undefined){
        leftVal = root.left.val <= root.val;
    }
    if(root.right !== undefined){
        rightVal = root.right.val >= root.val;
    }

    return rightVal && leftVal && isValidBST(root.left) && isValidBST(root.right);
 }

// function dfs(root:TreeNode){
//     if(root === undefined){
//         return 0;
//     }

//     if(root.left !== undefined && root.right !== undefined){
//         return 1 + dfs(root.left) + dfs(root.right);
//     }
//     else if(root.left !== undefined){
//         return 1 + dfs(root.left);
//     }
//     else if(root.right !== undefined){
//         return 1 + dfs(root.right);
//     }
//     else {
//         return 1;
//     }
// }

function constructBST(arr: number[], start: number, end: number, root: TreeNode){
    if(start > end || start < 0 || end >= arr.length){
        return null;
    }
   let mid = Math.floor((start+end)/2)
   if(root === null){
        root = new TreeNode(arr[mid]);
   }
    
    root.left = constructBST(arr, start, mid-1, root.left)
    root.right = constructBST(arr, mid+1, end, root.right)

    return root;
}

class TreeNode {
    val: number
    left: TreeNode
    right: TreeNode

    constructor(val?: number, left?: TreeNode, right?:TreeNode){
        if (val === undefined){
            this.val = null
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

 testBST()