/**
 * 
 * 
 * 
 * interface SnapshotSet<T> {
  void add(T e);
  void remove(T e);
  boolean contains(T e);
  Iterator<T> iterator();
}
add(1) -> 1 

iterator (1) -> (1)

add(2) -> (1,2) 
dele(1) -> (2)

iterator.next() -> (1)
iterator.hasNext() -> false
 * 
 */

/*
  timestamp = 0
  Set: [1: 0, 2: 0]
  Iterator 0          [1: 0, 2: 0]
  timestamp = 1

  add(3)

  Set: [1: 0, 2: 0, 3: 1]

  add(4)

  Set: [1: 0, 2: 0, 3: 1, 4: 1]
  Iterator 1          [1: 0, 2: 0, 3: 1, 4: 1]
  timestamp 2

  remove(3)
  remote(4)

  Set: [1: 0, 2: 0]
  RemovedElementsSet [4, (1, 2), 3: (1, 2)]

  Iterator 3 [1: (0, null), 2: (0, null)]
  timestamp (2,3)

*/


const _ = require('lodash');

class SnapShotSet {
  map: Map<number, number>
  timestamp: number = 0;
  iteratorValue: number = 0;
  removedElements: Map<number, number>

  constructor(){
    this.map = new Map<number, number>();
    this.removedElements = new Map<number, number>();
  }

  add(newNumber: number){
    this.map.set(newNumber, this.timestamp);
  }

  remove(numberToRemove: number){
    if(this.map.has(numberToRemove)){
      this.removedElements.set(numberToRemove, this.map.get(numberToRemove));
      this.map.delete(numberToRemove);
    }
  }

  contains(numberToCheck: number){
    return this.map.has(numberToCheck);
  }

  createIterator(){
    this.timestamp++;
  }

  getElementsOfIterator(iteratorLevel: number){
    let tempIteratorSet = new Set<number>();

    this.map.forEach((value: number, key: number) => {
      if(value <= iteratorLevel){
        tempIteratorSet.add(key);
      }
    })

    this.removedElements.forEach((value: number, key: number) => {
      if(value <= iteratorLevel){
        tempIteratorSet.add(key);
      }
    })

    return tempIteratorSet;

  }

}
