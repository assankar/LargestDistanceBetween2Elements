function testMinValueFromSequence(){

}

const map:Map<number[],number> = new Map<number[],number>();

 
function helper(arr:number[], target:number){
    if(map.has(arr)){
        return map.get(arr);
    }
    if(arr.length === 0){
        return math.abs(0-target);
    }

    let minDist = abs(sum(arr) - target);

    for(let i = 0; i < arr.length; i++){
        let currentNum = arr[i];
        let newArr = [];
        for(let j = 0; j < arr.length; j++){
            if(i !== j){
                newArr.push(arr[j]);
            }
        }
        let dist = helper(newArr, target);
        if(dist < minDist){
            minDist = dist;
        }
    }
    map.set(arr, minDist);
    return minDist;
}

testMinValueFromSequence();