// design an LRU cache
// such that the key can be a integer or a string
// the value is of any type
// the cache size is a parameter to the constructor

// what insertion time for the cache? Should be O(1);
// what should the lookup time be for the cache? Should be O(1);
// what should the eviction time for the cache? Should be O(1);
// what should the update value for the cache? Should O(1);

// update/read/add/evict/ 

// in this case we'll use update/read/add as a usage. 
// So then its the most recently used piece of the cache


function lrucache(){

}

class LNode {
    key: string
    val: any
    next: LNode
    prev: LNode

    constructor(key: string, val: any){
        this.key = key
        this.val = val;
    }

    setNext(next: LNode){
        this.next = next;
    }

    setPrev(prev: LNode){
        this.prev = prev;
    }
}

class DoubleLinkedList {
    head: LNode
    tail: LNode
    constructor(){
        this.head = undefined;
        this.tail = undefined;
    }

    add(newNode: LNode){
        if(this.tail !== undefined){
            this.tail.next = newNode;
            newNode.setPrev(this.tail);
            this.tail = newNode;
        } else {
            this.head = newNode;
            this.tail = newNode;
            newNode.prev = undefined;
        }

        newNode.next = undefined;
    }

    pop(){
        if(this.head !== undefined){
            let node = this.head;
            node.next = undefined;
            node.prev = undefined;
            this.head = this.head.next;
            if(this.head != undefined){
                this.head.prev = undefined
            } else {
                this.tail = undefined;
            }
            return node;
        }
        return undefined;
    }

    remove(nodeToRemove: LNode){
        if(nodeToRemove.prev === undefined && nodeToRemove.next === undefined){
            this.head = undefined;
            this.tail = undefined;
        } else {
            if(nodeToRemove.prev !== undefined){
                nodeToRemove.prev.next = nodeToRemove.next;
            }
            if(nodeToRemove.next !== undefined){
                nodeToRemove.next.prev = nodeToRemove.prev;
            }
        }
    }
}

class LRUCache {
    counter: number;
    size: number;
    map: Map<string, LNode>;
    list: DoubleLinkedList;

    constructor(size:number){
        this.size = size;
        this.counter = 0;
        this.list = new DoubleLinkedList();
    }

    add(key: string, value: any){
        if (this.counter === this.size){
            this.remove();
        }
        let newNode:LNode = new LNode(key, value);
        this.map.set(key,newNode);
        this.list.add(newNode);
        this.counter++;
    }

    remove(){
        let removeNode = this.list.pop();
        if (removeNode !== undefined){
            this.map.delete(removeNode.key);
            this.counter--;
        }
    }

    updateLRU(updatedNode: LNode){
        this.list.remove(updatedNode);
        this.list.add(updatedNode);
    }

    read(key: string){
        if(this.map.has(key)){
            let updateNode = this.map.get(key);
            this.updateLRU(updateNode);
            return updateNode.val;
        }
        return undefined;
    }

    update(key: string, value: any){
        if(this.map.has(key)){
            let updateNode = this.map.get(key);
            updateNode.val = value;
            this.updateLRU(updateNode);
        }
        return undefined;
    }

    delete(key: string){
        if(this.map.has(key)){
            let deletedNode = this.map.get(key);
            this.list.remove(deletedNode);
        }
    }
}

lrucache();