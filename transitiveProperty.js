"use strict";
// Given a right side of equation 
// Only operations is addition and multiplication
// Grouping with paranthesis
// You are accountalbe for PEMDAS
// The task is to return the evaluation of it or return the order of operations
Object.defineProperty(exports, "__esModule", { value: true });
// 5 + ( 2 + 7 ) * 4
// (2 + 7)
// 9 * 4
// 5 + 36
const operatorSet = new Set(['+', '*', '(', ')']);
const priorityMap = new Map([['*', 1], ['+', 2], ['(', 3], [')', 3]]);
function convert2postFix(eq) {
    let myStack = [];
    let outputList = [];
    let tokens = eq.split(' ');
    for (let t of tokens) {
        if (t === '(') {
            myStack.push(t);
        }
        else if (operatorSet.has(t)) {
            let loopable = myStack.length > 0;
            while (loopable) {
                let operator = myStack.pop();
                let shouldBePopped = priorityMap.get(operator) <= priorityMap.get(t);
                if (shouldBePopped) {
                    if (operator !== '(') {
                        outputList.push(operator);
                    }
                    else {
                        loopable = false;
                    }
                }
                else {
                    myStack.push(operator);
                    loopable = false;
                }
            }
            if (t !== ')') {
                myStack.push(t);
            }
        }
        else {
            outputList.push(t);
        }
    }
    while (myStack.length !== 0) {
        outputList.push(myStack.pop());
    }
    return outputList;
}
function evaluatePostfix(input) {
    let myStack = [];
    for (let i of input) {
        if (!operatorSet.has(i)) {
            myStack.push(parseInt(i));
        }
        else {
            let temp1 = myStack.pop();
            let temp2 = myStack.pop();
            if (i === "+") {
                myStack.push(temp1 + temp2);
            }
            else if (i === "*") {
                myStack.push(temp1 * temp2);
            }
        }
    }
    return myStack.pop();
}
function main() {
    let testA = "5 + ( 2 + 7 ) * 4";
    console.log(evaluatePostfix(convert2postFix(testA)));
}
main();
//# sourceMappingURL=transitiveProperty.js.map