function testMagicNumber() {
    console.log(isMagicNumber(7));
    console.log(isMagicNumber(4));
}

function isMagicNumber(num: number){
    let mySet: Set<number> = new Set<number>();
    let res = num;


    while(mySet.has(res) != true){
        mySet.add(res);

        let numString = res.toString();
        res = 0;
        for(let i=0; i < numString.length; i++){
            res = parseInt(numString[i]) * parseInt(numString[i]) + res;
        }

        if(res == 1){
            return true;
        }
    }

    return false;
}



testMagicNumber();