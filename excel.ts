// Designing a backend Excel Api
// In the Excel document, users can input 2 forms. 
//         - Positive Integer only 
//         - Formula's of form(They refer to specific cells)
//              - Only operator permitted is addition


//      Cell A     Cell B
//Row 1   4          5
//Row 2   6         =A1+B1+3
//Row 3  =B1        =B2+A1

// A1 Parent: Empty []
// A1 Value: 4
// A1 RawValue: 4 (string input)
// A1 Children: [B2, B3]

// B2 Parent: [A1, B1]
// B2 Value: 12
// B2 RawValue: "A1+B1+3"
// B2 Children: [B3]

//Design 2 methods (2 api calls)

//First is a put method 
//Given a Cell ID, Value needs to be stored

//Second is a get method
//Given a Cell ID, return Value of that cell


function testExcel() {

    let testSheetA: SpreadSheet = new SpreadSheet();
    testSheetA.put('A1', '4');
    testSheetA.put('B1', '5');
    testSheetA.put('A2', '6');
    testSheetA.put('B2', '=A1+B1+3');
    testSheetA.put('A3', '=B1');
    testSheetA.put('B3', '=B2+A1');

    console.log(testSheetA.get('B2')); //returns 12
    console.log(testSheetA.get('A2')); // returns 6
    console.log(testSheetA.get('A3')); // returns 5
    console.log(testSheetA.get('B3')); // returns 16
    testSheetA.put('A1', '20');
    console.log(testSheetA.get('B2')); // returns 28
    console.log(testSheetA.get('B3')); // returns 48
    testSheetA.put('A1', '=20+B1');
    console.log(testSheetA.get('B2')); // return 53

    testSheetA.put('B1' '=A1+5');

};

class SpreadSheet{
    sheet: Map<string, Cell>;

    constructor(){
        this.sheet = new Map<string, Cell>();
    }

    put(cellName: string, rawValue: string){
        if(this.sheet.has(cellName)){
            this.sheet.get(cellName).put(rawValue, this.sheet);
        } else {
            this.sheet.set(cellName,new Cell(cellName, rawValue, this.sheet));
        }
    }

    get(cellName: string): number{
        return this.sheet.get(cellName).get()
    }
}


class Cell {
    cellName: string;
    val: number
    addedConstant: number
    rawValue: string
    parent: Cell[]
    children: Cell[]
    needsToUpdate: boolean

    constructor(cellName:string, rawValue: string, map:Map<string, Cell>){
        this.cellName = cellName;
        this.val = 0;
        this.children = [];
        this.parent = [];
        this.addedConstant = 0;
        this.put(rawValue, map);
    }

    addChild(cellToAdd: Cell){
        this.children.push(cellToAdd);
    }

    removeChild(cellNametoRemove: string){
        let newChildren = [];
        for(let c of this.children){
            if(c.cellName !== cellNametoRemove){
                newChildren.push(c);
            }
        }
        this.children = newChildren;
    }

    put(rawValue: string, map:Map<string, Cell>){
        for(let p of this.parent){
            p.removeChild(this.cellName);
        }
        this.parent = [];
        this.addedConstant = 0;
        this.rawValue = rawValue;
        this.needsToUpdate = false;
        if(rawValue[0] === '='){
            let parentCell = [];
            let formulaString = "";
            for(let i = 1; i < rawValue.length; i++){
                if(rawValue[i] !== '+'){
                    formulaString += rawValue[i];
                } else{
                    this.helper(map, formulaString, parentCell);
                    formulaString = "";
                }
            }

            this.helper(map, formulaString, parentCell);
            formulaString = "";

            this.parent = parentCell;
            for(let p of this.parent){
                this.val += p.get();
            }
            this.val += this.addedConstant;
        } else {
            this.val = parseInt(rawValue);
        }

        for(let c of this.children){
            c.setNeedsToUpdate();
        }
    };

    helper(map:Map<string, Cell>, formulaString: string, parentCell: Cell[]){
        if(map.has(formulaString)){
            let newParent = map.get(formulaString);
            parentCell.push(newParent);
            newParent.addChild(this);
            
        } else {
            this.addedConstant += parseInt(formulaString);
        }
    }
    
    get(): number {
        if(this.needsToUpdate){
            this.val = 0;
            for(let p of this.parent){
                this.val += p.get();
            }
            this.val += this.addedConstant;
        }
        return this.val;
    };

    setNeedsToUpdate() {
        this.needsToUpdate = true;
        for(let c of this.children){
            c.setNeedsToUpdate();
        }
    }

    checkforCycle(rawValue: string, map: Map<string, Cell>) {
        let newInput: Set<string> = new Set<string>();
        if(rawValue[0] === '='){
            let parentCell = [];
            let formulaString = "";
            for(let i = 1; i < rawValue.length; i++){
                if(rawValue[i] !== '+'){
                    formulaString += rawValue[i];
                } else{
                    newInput.add(formulaString);
                    formulaString = "";
                }
            }
            newInput.add(formulaString);
        }
        else {
            return false;
        }

        for()

        // Set<Cell> create
        //if (parent cell is in my children) then i'm in a cycle

        //Create a get Children Set. 
        //Then do a raw substring search of if my value is in that children. 

        // check validity input. 

        for()

        for(let p of this.parent){

        }
    }
}
testExcel();