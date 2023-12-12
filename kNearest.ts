// Given a list of points
// Points are on the X/Y Coordinate system
// They are in an unsorted list
// You'll be given an additional coordinate that is not part of the list. 
// Find k nearest coordinates from the list to the given point

import {Heap } from 'heap-js';
import { NumberLiteralType } from 'typescript';

// Min Heap By default
const comparator = (a:distOfCord, b:distOfCord) => a.dist - b.dist;
const minHeap = new Heap(comparator);

class distOfCord {
    xVal: number
    yVal: number
    dist: number

    constructor(x: number, y: number, coordX: number, coordY: number){
        this.xVal = x;
        this.yVal = y;

        this.dist = Math.sqrt(Math.pow(Math.abs(this.xVal-coordX), 2) + Math.pow(Math.abs(this.yVal-coordY), 2));
    }

}

function knearest(listOfCords: number[][], coordX: number, coordY: number, k: number){
    for(let coords of listOfCords){
        minHeap.push(new distOfCord(coords[0], coords[1], coordX, coordY));
    }

    for(let i = 0; i < k; i++){
        console.log(minHeap.pop());
    }
}

function testKNearest(){
    let testA = [[1, 1], [-1,-1], [-1, 1], [1, -1], [2, 2]];
    let testAXCoord = 3
    let testAYCoord = 3

    knearest(testA, testAXCoord, testAYCoord, 4);
}

testKNearest();