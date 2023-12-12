function testMaxSubArray () {
    // Given an integer array nums, find the subarray with the largest sum, and return its sum.

    /*  input: nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4]
        output: 6
        explanation: [4,-1, 2, 1] has the largest sum 6.

        input: nums = [1]
        output: 1
        explanation: The subarray [1] has the largest sum 1.

        input: nums = [5,4,-1,7,8]
        output: 23
        explanation: The subarray [5,4,-1,7,8] has the largest sum.
    */


    const testA =  [-2, 1, -3, 4, -1, 2, 1, -5, 4];
    const resultA = maxSubArray(testA);
    if(resultA == 6){
        console.log(`Test A Successful with value ${resultA} when 6 was expected`);
    } else {
        console.log(`Test A Unsucessful with value ${resultA} when 6 was expected`);
    }
    const testB =  [1];
    const resultB = maxSubArray(testB);
    if(resultB == 1){
        console.log(`Test B Successful with value ${resultB} when 1 was expected`);
    } else {
        console.log(`Test B Unsucessful with value ${resultB} when 1 was expected`);
    }
    const testC =  [5,4,-1,7,8];
    const resultC = maxSubArray(testC);
    if(resultC == 23){
        console.log(`Test C Successful with value ${resultC} when 23 was expected`);
    } else {
        console.log(`Test C Unsucessful with value ${resultC} when 23 was expected`);
    } 
    
};

function maxSubArray(nums: number[]): number {
    let local = nums[0];
    let global = Math.max(-Infinity, local);

    for (let i = 1; i < nums.length; i++){
        local = Math.max(nums[i], local + nums[i])
        if(local > global) {
            global = local;
        }
    }

    return global
}

testMaxSubArray();