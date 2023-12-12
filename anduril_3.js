/*
Problem Prompt: We’re building a library to manage allocating and de-allocating from a pool of unique IDs.
 The pool starts out with all IDs from 0 to NUM_IDS-1 available. Expose 2 functions to users:

// Returns any available (non-allocated) ID, if there are any available IDs.
// If there are no available IDs, either raise an error or return -1.
int getID() {}

// If and only if the given ID is presently allocated, release it, making it
// available to be returned by getID again. If idToRelease is not the value
// of a currently-allocated ID, do nothing.
void ReleaseID(int idToRelease) {}

Clients will call getID() to receive a unique ID, and use that ID for some period of time. When they’re done,
 they’ll call releaseID() with that ID.

NUM_IDS = 3
GetID() // 1
GetID() // 0
GetID() // 2
GetID() // return -1 or raise an error
ReleaseID(1)
GetID() // 1 because it's only available
GetID() // return -1 because pool is empty

Runtime O(1) both getID and releaseID

Let's say we had a pool size of 16M. How many bytes of memory would be used in the worst-case?
Worst case: set of size 16M. How many bytes are used per set element?

mySet().

// profile memory used here
mySet.add(12345)
// profile memory used after. How much would it increase?
[0, 1, 2, 3, .... 16M] vs Set{0,1,2,3,4....16M}, which uses more memory?
Generally a set will store a pointer in addition to set value
16M * (8 bytes + 8 bytes) = 256MB

memory-optimized solution: store a bit vector of length NUM_IDS
GetID scans bitvector for first free bit, flips it, and returns the inex
ReleaseID, indexes into the bitvector and set the bit to available

Goals:
- Pool size of up to 16M
- <= 1 byte per id (8 bits)
- O(1) runtime for getID and releaseID, with respect to the pool size.

isSegmentAvailable [true, false, true.....] # store whether or not there are any free ids in the segment

Set({0, 100, 200})

Say our segment size was actually, 100


bitSegments = [
    [false, false, true] // state of ids 0, 1, 2
    [false, false, false] // 3, 4, 5
    [true, false, false] / 6, 7, 8
    [true, true, true]..
    ....
    ....
]

What is the relationship between segment size and runtime? Between segment size and memory usage?

*/
var NUM_IDS = 3; // [0,1,2]
var manageIds = /** @class */ (function () {
    function manageIds(size) {
        this.availableSet = new Set();
        for (var i = 0; i < size; i++) {
            this.availableSet.add(i);
        }
        this.usedSet = new Set();
    }
    manageIds.prototype.getId = function () {
        if (this.availableSet.size !== 0) {
            // this.availableSet.pop()
            var values = this.availableSet.values();
            var newId = values.next().value;
            this.availableSet.delete(newId);
            this.usedSet.add(newId);
            return newId;
        }
        else {
            return -1;
        }
    };
    manageIds.prototype.releaseId = function (idToRelease) {
        if (this.usedSet.has(idToRelease)) { // <- what if you removed this?
            this.usedSet.delete(idToRelease);
            this.availableSet.add(idToRelease);
        }
    };
    return manageIds;
}());
function anduril_3() {
    var ids = new manageIds(NUM_IDS);
    console.log(ids.getId());
    console.log(ids.getId());
    console.log(ids.getId());
    console.log(ids.getId());
    ids.releaseId(1);
    console.log(ids.getId());
}
anduril_3();
