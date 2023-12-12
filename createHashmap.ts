/*
interface Hashtable {
    **
     * Map the given key to the given value.
     * @return The previous value mapped to the key, or null.
     *
    Object put(Object key, Object value);

    **

     * @return The current mapped value for the key, or null.
     *
    Object get(Object key);

    **
     * Remove the key from the hashtable.
     * @return The previous mapped value for the key, or null.
     *
    Object delete(Object key);
}

Object {
    bool equals(Object o)
    int hashCode()
}

*/

/*
    HashMap('test, 10)
    
    list [ ,,,,,,]
    
    map.add('test');
    int num =hashCode('test); //1
    
    list [,10,,,,,]

*/
class linkedlistnode {
    nodeKey: string;
    nodeVal: string;
    next: linkedlistnode;
    
    constructor(key: string, val: string, next?: linkedlistnode){
        this.nodeKey = key;
        this.nodeVal = val;
        if(next !== undefined){
            this.next = next;
        } else {
            next = undefined;
        }
    }
    
}

const map:Array<linkedlistnode> = new Array<linkedlistnode>(32);

function addToMap(key: string, value: string){
    let hashCodeForKey = hashCode(key);
    
    if(map[hashCodeForKey] === undefined){
        let newNode: linkedlistnode = new linkedlistnode(key, value);
        map[hashCodeForKey] = newNode;
    } else {
        let currentNode = map[hashCodeForKey];
        while (currentNode.next !== undefined){
            currentNode = currentNode.next;
        }
        let newNode: linkedlistnode = new linkedlistnode(key, value);
        currentNode.next = newNode;
    }
}

/*
[ 
    1: ('test', 2) -> ('turn', 3)
    2: ('sakthi', 10)
    3: undefined
]
*/

function getFromMap(key: string){
    let hashCodeForKey = hashCode(key);                 //Key = Marcelo Hascode = 1
    
    if(map[hashCodeForKey] === undefined){
        return undefined;
    } else {
        let currentNode = map[hashCodeForKey];
        while(currentNode !== undefined){
            if(currentNode.nodeKey === key){
                return currentNode.nodeVal;
            }
            currentNode = currentNode.next;
        }
        return undefined;
    }
}

function testingGetFromMap(){
    addToMap("test", '2');
    console.log('test');
    addToMap("turn", '3');
    console.log('turn');
    addToMap("sakthi", '10');
    
    console.log(getFromMap('marc'));
    
    addToMap("test", '3');
    console.log(getFromMap('test'));
}


function hashCode(s: string): number {
    return s.length;
}

testingGetFromMap();




