/*

Binary Tree

*/

class BTreeNode{
    val: number
    left: BTreeNode
    right: BTreeNode

    constructor(val: number, left?: BTreeNode, right?: BTreeNode){
        this.val = val

        if(left !== undefined){
            this.left = left;
        }

        if(right !== undefined){
            this.right = right;
        }
    }

}

/*
    3 
  4    6
2  1    9


{
    0: 3
    1: 4, 6
    2: 2, 1, 3, 9


    Node 3 : left 4 right 6
    Node 4 : left 2 right 1
    Node 5
}
*/

let result = [];
let map:Map<number, number[]> = new Map<number, number[]>();
let level = 0;
let root: BTreeNode
map.set(level, [root.val]);

function serialize(left: BTreeNode, right: BTreeNode, level: number){

    while(left != undefined && right != undefined){
        if(left != undefined && right != undefined){
            if(map.has(level+1)){
                let list = map.get(level+1);
                list.push(left.val);
                list.push(right.val)
                map.set(level+1, list);
            }
            map.set(level+1, [left.val, right.val])
        } else if(left != undefined){
            if(map.has(level+1)){
                let list = map.get(level+1);
                list.push(left.val);
                list.push(undefined)
                map.set(level+1, list);
            }
            map.set(level+1, [left.val, undefined])
        } else {
            if(map.has(level+1)){
                let list = map.get(level+1);
                list.push(undefined);
                list.push(right.val)
                map.set(level+1, list);
            }
            map.set(level+1, [undefined, right.val])
        }
        level++;
        serialize(left.left, left.right, level);
        serialize(right.left, right.right, level);
    }

}

function toDeserialize(){
    if(map.get(0) === undefined){
        return false;
    }
    else {
        let rootNode = new BTreeNode(map.get(0).pop());
        deserialize(rootNode.left, rootNode.right, 1);
        rootNode = rootNode.left;
    }
}

function deserialize(left: BTreeNode, right: BTreeNode, level: number, ){
    if(map.get(level).length !== 0){
        let list = map.get(level);
        left = new BTreeNode(list[0]);
        right = new BTreeNode(list[1]);
        map.set(level, list.slice(2));
    }
}
