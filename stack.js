"use strict";
/*

(1 , 5, 3, 10, 14, 20)


((1, 5), (3, 10), (14, 20))

((1, 10), (14, 20))

(1, 5, 2, 4)

((1, 5), (2, 4))

*/
Object.defineProperty(exports, "__esModule", { value: true });
class pair {
    left;
    right;
    constructor(l, r) {
        this.left = l;
        this.right = r;
    }
    hasOverlap(otherPair) {
        if (this.right > otherPair.left && this.right < otherPair.right) {
            return true;
        }
        else if (this.right > otherPair.right && this.left < otherPair.right) {
            return true;
        }
        return false;
    }
    updateOverlap(otherPair) {
        this.left = Math.min(this.left, otherPair.left);
        this.right = Math.max(this.right, otherPair.right);
    }
}
function handleMatching(input) {
    let pairs = [];
    for (let i = 0; i < input.length; i = i + 2) {
        pairs.push(new pair(input[i], input[i + 1]));
    }
    let i = 1;
    let currentPair = pairs[0];
    let pairLength = pairs.length;
    let result = [];
    while (i < pairLength) {
        if (currentPair.hasOverlap(pairs[i])) {
            currentPair.updateOverlap(pairs[i]);
        }
        else {
            result.push(currentPair);
            currentPair = pairs[i];
        }
        i++;
    }
}
//# sourceMappingURL=stack.js.map