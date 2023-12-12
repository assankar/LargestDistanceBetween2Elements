/*
We have a surveillance tower with multiple cameras with different FOVs (fields of view) that can be mounted at any angle on a pole. Given a target FOV and the FOV of each camera return the minimum set of cameras required to cover the target FOV while transmitting the least amount of data. Assume that each camera streams video at the same bandwidth (regardless of size of FOV). In other words, select the fewest cameras to cover the target FOV.

Target FOV [60, 120] 
Cameras: {[30, 90], [40, 70], [50, 100], [70, 100], [80, 120]}

[30, 50, 40]

[80, 80]

[70, 100]

[30, 90], [40,70]
minB = 60
amountcovered = 0
result - []
c of cameras

if(c[0] < minB and c[1] > minB)
    result.push(c)
    minB = c[1]

Output: 2
Reason: Minimum of 2 cameras are needed {[30, 90] [80, 120]}
*/
import {Heap } from 'heap-js';

class pairWindow {
    left: number;
    right: number;
    totalCameras: number;

    constructor(l: number, r: number){
        this.left = l;
        this.right = r;
        this.totalCameras = 1;
    }

    hasOverlap(otherWindow, targetMin: number, targetMax: number) {
        if((otherWindow.left <= this.left && otherWindow.right >= this.right)
          || (this.left <= targetMin && this.right >= targetMax)) {
            return false;
        }
        else if (this.right > otherWindow.left && this.right < otherWindow.right) {
            return true;
        }
        else if (this.right > otherWindow.right && this.left < otherWindow.right) {
            return true;
        }
        return false;
    }
    updateOverlap(otherWindow) {
        this.left = Math.min(this.left, otherWindow.left);
        this.right = Math.max(this.right, otherWindow.right);
        this.totalCameras++;
    }
}

function handleCameras(cameras: number[][], targetMin: number, targetMax: number){
    let listOfWindows: pairWindow [] = []
    const comparator = (a:pairWindow, b:pairWindow) => a.totalCameras - b.totalCameras;
    const minHeap = new Heap(comparator);

    for(let c of cameras){
        listOfWindows.push(new pairWindow(c[0], c[1]))
    }

    let currentWindow = listOfWindows[0];
    minHeap.push(currentWindow);

    for(let i = 1; i < listOfWindows.length; i++){
        let candidateWindow = listOfWindows[i];
        if (currentWindow.hasOverlap(candidateWindow, targetMin, targetMax)){
            currentWindow.updateOverlap(candidateWindow);
        } else {
            currentWindow = candidateWindow;
            minHeap.push(currentWindow);
        }
    }

    return minHeap.pop().totalCameras;
}

function runCameraTest(): void {
    let testA = [[30, 90], [40, 70], [40, 71], [50, 100], [70, 100], [80, 120]]
    console.log(handleCameras(testA, 60, 120));

    let testB = [[30, 90], [50, 130]];
    console.log(handleCameras(testB, 60, 120));

    //let testC = [[30, 90], [40, 70], [50, 100], [70, 100], [80, 120]]
    //console.log(handleCameras(testC, 60, 120));

    //let testD = [[30, 90], [40, 70], [50, 100], [70, 100], [80, 120]]
    //console.log(handleCameras(testD, 60, 120));

    //let testE = [[30, 90], [40, 70], [50, 100], [70, 100], [80, 120]]
    //console.log(handleCameras(testE, 60, 120));
}

runCameraTest();