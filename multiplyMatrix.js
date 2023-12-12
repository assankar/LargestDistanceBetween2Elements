"use strict";
// const map: Map<number[][],number> = new Map<number[],number>();
Object.defineProperty(exports, "__esModule", { value: true });
// function main () {
//     // Given a list of matrix's. Determine whats the best order to multipley them. 
//     // Matrix M1 could be size 2x2
//     // Matrix M2 could be size 2x3
//     // Matrix M3 could be size 3x80
//     // Matrix M4 could be size 80x3
//     //When you multiply Matrix M1 and M2 2x2 and 2x3. The column of M1 needs 
//     //to line up with row of M2. The number of operations to do the multiplication is
//     //2(row of m1) x 2(column of m1 or row of m2) x 3(column of m2)
//     //the best way to do handle [M1,M2,M3,M4] is:
//     // M12 and then M34 (total operations of M1 x M2 is 12 + total operation sof M3 x M4 is 720)
//     // M12 x M34 is (2x3) x (3x3) is (2 * 3 * 3) is 18. 
//     // 12 + 720 + 18 = 750 operations 
//     //the wrong asnwer would be:
//     // M12 is 12 operations. 
//     // M12 (2x3) x M3 (3x80) is 480
//     // M123 (2x80) x M4 (80x3) is 480
//     // 12 + 480 + 480 is 972 operations
//     const testA = [[2,2],[2,3],[3,80],[80,3]];
//     multiplyMatrix(testA);
// };
// function multiplyMatrix(matrixList: number[][]): number {
//     if (map.has(matrixList)){
//         return map.get(matrixList);
//     }
//     if (matrixList.length == 2){
//         return matrixList[0][0] * matrixList[0][1] * matrixList[1][1];
//     }
//     let cost = Infinity;
//     let newMatrix = [];
//     for(let i = 0; i < matrixList.length - 1; i++){
//         let ops = matrixList[i][0] * matrixList[i][1] * matrixList[i+1][1];
//         newMatrix = [matrixList[i][0], matrixList[i+1][1]];
//         let newList: number[][] = [];
//         for(let j = 0; j < i; j++) {
//             newList.push(matrixList[j]);
//         }
//         newList.push(newMatrix);
//         for(let j = i+2; j < matrixList.length; j++){
//             newList.push(matrixList[j]);
//         }
//         cost = Math.min(cost, ops + multiplyMatrix(newList));
//     }
//     map.add()
//     return cost;
// }
// main()
//# sourceMappingURL=multiplyMatrix.js.map