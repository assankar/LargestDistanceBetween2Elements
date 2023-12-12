// [44, 32, 33, 34, 50, 60]
// [4,   1,  1,  1,  1,  0]
//
function sortTempDays(input) {
    var map = new Map();
    for (var i = 0; i < input.length; i++) {
        map.set(input[i], i);
    }
    var stack = [input[0]];
    var answer = [];
    for (var i = 1; i < input.length; i++) {
        while (stack[stack.length - 1] < input[i]) {
            var t = stack.pop();
            answer[map.get(t)] = i - map.get(t);
        }
        stack.push(input[i]);
    }
    answer.push(0);
    return answer;
}
var result = sortTempDays([44, 32, 33, 34, 50, 60]);
console.log(result);
