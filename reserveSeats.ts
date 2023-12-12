function testReservedSeats(){
    let test1N = 3;
    let test1ReservedSeats = [[1,2],[1,3],[1,8],[2,6],[3,1],[3,10]]

    let test2N = 2
    let test2ReservedSeats = [[2,1],[1,8],[2,6]]

    let test3N = 4
    let test3ReservedSeats = [[4,3],[1,4],[4,6],[1,7]]

    console.log(4 === maxNumberOfFamilies(test1N, test1ReservedSeats));
    console.log(2 === maxNumberOfFamilies(test2N, test2ReservedSeats));
    console.log(4 === maxNumberOfFamilies(test3N, test3ReservedSeats));

    console.log(4 === maxNumberOfFamilies2(test1N, test1ReservedSeats));
    console.log(2 === maxNumberOfFamilies2(test2N, test2ReservedSeats));
    console.log(4 === maxNumberOfFamilies2(test3N, test3ReservedSeats));

}

function maxNumberOfFamilies(n: number, reservedSeats: number[][]): number {
    let counter = 0; 
    if (n === undefined || n === 0 ){
        return 0;
    }

    let map2: Map<number, Map<number, number>> = new Map<number, Map<number, number>>();

    const set2345 = new Set<number>([2,3,4,5]);
    const set4567 = new Set<number>([4,5,6,7]);
    const set6789 = new Set<number>([6,7,8,9]);

    for (let i = 0; i < reservedSeats.length; i++){
        if(!map2.has(reservedSeats[i][0])){
            map2.set(reservedSeats[i][0], defaultMapGenerator());
        }
        let currentMap = map2.get(reservedSeats[i][0]);
        let seat = reservedSeats[i][1];
        if(set2345.has(seat)){
            currentMap.set(0, 0);
        }
        if(set4567.has(seat)){
            currentMap.set(1, 0);
        }
        if (set6789.has(seat)){
            currentMap.set(2, 0);
        }
        
    }

    for(let row = 1; row < n+1; row++){
        if(!map2.has(row)){
            counter += 2;
            continue;
        }
        let rowMap = map2.get(row);
        if(rowMap.get(0) && rowMap.get(2)){
            counter += 2;
        } else if(rowMap.get(0) || rowMap.get(1) || rowMap.get(2)){
            counter++;
        } 
    };

    return counter;
};

function defaultMapGenerator(){
    return new Map<number,number>([[0,1],[1,1],[2,1]]);
}

function maxNumberOfFamilies2(n: number, reservedSeats: number[][]): number {
    let counter = n * 2; 
    if (n === undefined || n === 0 ){
        return 0;
    }

    let map2: Map<number, Map<number, number>> = new Map<number, Map<number, number>>();

    const set2345 = new Set<number>([2,3,4,5]);
    const set4567 = new Set<number>([4,5,6,7]);
    const set6789 = new Set<number>([6,7,8,9]);

    for (let i = 0; i < reservedSeats.length; i++){
        if(!map2.has(reservedSeats[i][0])){
            map2.set(reservedSeats[i][0], defaultMapGenerator());
        }
        let currentMap = map2.get(reservedSeats[i][0]);
        let seat = reservedSeats[i][1];
        if(set2345.has(seat)){
            currentMap.set(0, 0);
        }
        if(set4567.has(seat)){
            currentMap.set(1, 0);
        }
        if (set6789.has(seat)){
            currentMap.set(2, 0);
        }
        
    }

    for(let row of map2){
        let groups = row[1];

        if(groups.get(0) && groups.get(2)){
            continue;
        } else if(groups.get(0) || groups.get(1) || groups.get(2)){
            counter--;
        } else {
            counter -= 2;
        }
    };

    return counter;
};

testReservedSeats();