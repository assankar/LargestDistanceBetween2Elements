type coordinate = [number, number];

function testTrie(){
    let test1 = new Trie();
    test1.add("saturday");
    test1.add("sunday");
    test1.add("sun");

    let boggle = [["s", "u", "n", "t"], ["a", "d", "l", "s"], ["a", "n", "o", "p"], ["s", "y", "t", "r"]];

    console.log(createWord(boggle, test1));

    console.log(test1.has("sun"));
    console.log(test1.has("sunday"));
    console.log(test1.has("saturday"));
    console.log(test1.has("monday"));
    console.log(test1.has("satan"));


};

let mySet:Set<string> = new Set<string>();
let validWords:Set<string> = new Set<string>();
let next = [[0,1], [0,-1], [1,0],[-1,0]];

function createWord(board: string[][], t: Trie, currentString: string = "", c:coordinate = undefined){
    if(c !== undefined){
        for(let m of next){
            let row = c[0] + m[0];
            let col = c[1] + m[1];
            let nextCoordinate:coordinate = [row,col];
            //console.log(nextCoordinate);
            if(row >= board.length || col >= board.length){
                continue;
            } 
            if(row < 0 || col < 0){
                continue;
            } 
            if(mySet.has(nextCoordinate.toString())){
                continue;
            }
            mySet.add(nextCoordinate.toString());
            if(t.has(currentString+board[nextCoordinate[0]][nextCoordinate[1]])){
                validWords.add(currentString+board[nextCoordinate[0]][nextCoordinate[1]]);
            }
            createWord(board, t, currentString + board[nextCoordinate[0]][nextCoordinate[1]], nextCoordinate)
            mySet.delete(nextCoordinate.toString());
        }
    } else{

        for(let i = 0; i < board.length; i++){
            for(let j = 0; j < board[0].length; j++){
                

                if(mySet.has([i,j].toString())){
                    continue;
                }
                mySet.add([i,j].toString());

                if(t.has(currentString+board[i][j])){
                    validWords.add(currentString+board[i][j]);
                }
                createWord(board, t, currentString + board[i][j], [i,j]);

                mySet.delete([i,j].toString());
            }
        }
    }

    return validWords;
}

function doesWordExist(testWord: string, t: Trie){
    if(t.has(testWord)){
        return true;
    }

    return false;
}

class Trie{
    root: TrieNode
    constructor(){
        this.root = new TrieNode();
    }

    add(newWord: string){
        let level = newWord.length;
        let index = 0;
        let pointerNode = this.root;

        for(let s of newWord){
            if(index === level){
                pointerNode.isWord = true;
            }
            if(pointerNode.children.has(s)){
                pointerNode = pointerNode.children.get(s);
                index++;
            }
            else {

                let temp = new TrieNode(s);
                pointerNode.children.set(s, temp);
                pointerNode = temp;
                index++;
            }
        }

        pointerNode.isWord = true;
    }

    has(word: string){
        let pointerNode = this.root;

        for(let s of word){
            //console.log(s);
            if(pointerNode.children.has(s)){
                pointerNode = pointerNode.children.get(s);
            } else{
                return false;
            }
        }

        if(pointerNode.isWord === true){
            return true;
        }
        
        return false;
    }

}

class TrieNode {
    val: string
    children: Map<string, TrieNode>
    isWord = false;

    constructor(val?: string, child?: TrieNode) {
        if(val !== undefined){
            this.val = val;
        }
        this.children = new Map<string, TrieNode>();
    }
}

testTrie();