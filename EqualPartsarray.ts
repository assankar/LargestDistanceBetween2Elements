let map: Map<number[][], boolean> = new Map<number[][], boolean>();

function testEqualPartsArray() {
    // Given an integer array nums, find the subarray with the largest sum, and return its sum.

    /*  
    You are given an integer array:

        [1, 2, 3, 4, 5, 6, 9]

Determine whether there are 2 unique subsets of this array/set such that

Sum of [a_0....a_i] = Sum of [a_i+1....a_n] where n represents the final index of the array.

[1,2,3,4,5  6,9]
    */

/*
let list1 = [1,2,3];
let list2 = [4,5,6];
let listofLists = [list1, list2];
map.set(listofLists, true);

console.log(map.get(listofLists));
*/

    let testArr1 = [1,2,3,4,5,6,9];
    console.log(helper(testArr1, []));

    let testArr2 = [1,2,3,4,5];
    console.log(helper(testArr2, []));

};

function helper(arr_input:number[], arr_solution:number[]): boolean {
    if (map.has([arr_input, arr_solution])){
        return map.get([arr_input, arr_solution]);
    }
    else if (arr_input.length === 0 && arr_solution.length !== 0){
        map.set([arr_input, arr_solution], false);
        return false;
    }
    else if(arr_input.length === 0 && arr_solution.length === 0){
        map.set([arr_input, arr_solution], true);
        return true;
    }
    else if(arr_input.reduce((a,b) => a+b, 0) === arr_solution.reduce((a,b) => a+b, 0)){
        map.set([arr_input,arr_solution], true);
        return true;
    }

    for(let i = 0; i < arr_input.length; i++){
        let currentNum = arr_input[i];
        let newInputArr = [];
        let newSolutionArr = [currentNum];
        for(let j = 0; j < arr_input.length; j++){
            if(i !== j){
                newInputArr.push(arr_input[j]);
            }
        }

        for(let k = 0; k < arr_solution.length; k++){
            newSolutionArr.push(arr_solution[k]);   
        }

        let currentResult = helper(newInputArr, newSolutionArr);
        if(currentResult === true){
            map.set([arr_input, arr_solution], true);
            return true;
        }
    }


    return false;
}

testEqualPartsArray();