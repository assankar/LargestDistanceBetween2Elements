 function testStringEditDistance() {

    console.log(stringEditDistance('kitten', 'sitting'));
    console.log(stringEditDistance('saturday', 'sunday'));


 };

 function stringEditDistance(a:string, b:string){
    let matrix:number[][] = [];

    for(let i = 0; i < a.length+1; i++) {
        matrix[i] = [];
        for(let j = 0; j < b.length+1; j++){
            matrix[i].push(0);
        }
    }
    for(let i = 1; i < a.length+1; i++){
        matrix[i][0] = i;
    }

    for(let i = 1; i < b.length+1; i++) {
        matrix[0][i] = i;
    }
    let subCost = 0;

    for(let i = 0; i < a.length; i++){
        for(let j = 0; j<b.length; j++){
            if(a[i] == b[j]){
                subCost = 0;
            } else {
                subCost = 1;
            }
            matrix[i+1][j+1] = Math.min(matrix[i][j] + subCost, matrix[i+1][j] + 1, matrix[i][j+1] + 1);
        }
    }
    //console.log(matrix);
    return matrix[a.length][b.length];
 }

testStringEditDistance();