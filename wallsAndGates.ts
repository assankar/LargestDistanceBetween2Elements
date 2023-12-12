let map: Map<(number[] | number[][])[], number> = new Map<(number[] | number[][])[], number>();

let offSets = [[-1,0], [0,-1], [1,0], [0,1]];

/*
    Key: []
*/
 function testWallsAndGates() {
    // Given an integer array nums, find the subarray with the largest sum, and return its sum.

    /*  
    You are given an m x n grid rooms initialized with these three possible values.

-1 A wall or an obstacle.
0 A gate.
INF Infinity means an empty room. We use the value 231 - 1 = 2147483647 to represent INF as you may assume that the 
distance to a gate is less than 2147483647.
Fill each empty room with the distance to its nearest gate. If it is impossible to reach a gate, it should be filled with INF.


    */
   //let i = [[0,1],[[2,3],[0,3],[2,4]]]

    //map.set(i, 4);
    
    //let j = [[0,1],[[2,3],[0,3],[2,4]]]

    //console.log(map.get(i));

    //console.log(map.get(j));

    //Input: rooms = [[2147483647,-1,0,2147483647],[2147483647,2147483647,2147483647,-1],[2147483647,-1,2147483647,-1],[0,-1,2147483647,2147483647]]
    //Output: [[3,-1,0,1],[2,2,1,-1],[1,-1,2,-1],[0,-1,3,4]]
    let input1 = [[2147483647,-1,0,2147483647],[2147483647,2147483647,2147483647,-1],[2147483647,-1,2147483647,-1],[0,-1,2147483647,2147483647]]
    let output1 = [[3,-1,0,1],[2,2,1,-1],[1,-1,2,-1],[0,-1,3,4]]

    console.log(wallsAndGates(input1) === output1);

    let input2 = [[-1]]
    let output2 = [[-1]]

    console.log(wallsAndGates(input2) === output2);

};

// function helper(arr_input:number[][]): number[][] {
//     let row = arr_input.length;
//     let col = arr_input[0].length;

//     for(let i = 0; i < row; i++){
//         for(let j = 0; j < col; j++){
//             if(arr_input[i][j] === 0) {
//                 search(arr_input, [i,j], 0);
//             }
//         }
//     }


//  return arr_input;
// }

// function search(arr_input:number[][], coordinate:number[], dist:number) {

//     arr_input[coordinate[0]][coordinate[1]] = dist;

//     for(let i = 0; i < offSets.length; i++){
//         let j = coordinate[0] + offSets[i][0];
//         let k = coordinate[1] + offSets[i][1];

//         if(j >= 0 && j < coordinate[0] && k > 0 && k < coordinate[1] && arr_input[j][k] > dist+1){
//             search(arr_input, [j,k], dist+1);
//         }
//     }

// }

function wallsAndGates(rooms: number[][]) {
    let row = rooms.length;
    let col = rooms[0].length;
    let offSets = [[-1, 0], [1, 0], [0, 1], [0, -1]];

    for (let i = 0; i < row; i++) {
        for (let j = 0; j < col; j++) {
            if (rooms[i][j] === 0) {
                bfs(i, j, 0);
            }
        }
    }
    
    function bfs(i: number, j: number, dist: number): void {
        rooms[i][j] = dist;

        for (let k = 0; k < offSets.length; k++) {
            let xt = i + offSets[k][0];
            let yt = j + offSets[k][1];
            
            if (xt >= 0 && xt < row && yt >= 0 && yt < col && rooms[xt][yt] > dist+1) {
                bfs(xt, yt, dist+1);
            }
        }
        
    }

    return rooms;
};

testWallsAndGates();