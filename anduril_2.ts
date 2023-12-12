// [44, 32, 33, 34, 50, 60]
// [4,   1,  1,  1,  1,  0]
//

function sortTempDays(input: number[]){
    let map: Map<number, number> = new Map<number, number>();
    for(let i = 0; i < input.length; i++){
        map.set(input[i], i);
    }
    let stack = [input[0]];
    let answer = [];
   
    for(let i = 1; i < input.length; i++){
        while(stack[stack.length-1] < input[i]){
            let t = stack.pop();
            answer[map.get(t)] = i - map.get(t);
        } 
        stack.push(input[i]);
    }
     answer.push(0)

     return answer;
}

let result = sortTempDays([44, 32, 33, 34, 50, 60]);
console.log(result)