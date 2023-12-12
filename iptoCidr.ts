function testIpToCider () {

    const ip = "255.0.0.7"
    let strList:string[] = ip.split('.')
    let intList:number[] = []
    let result:number = 0
    for(let val of strList){
        console.log(`val: ${val}`)
        let tVal:number = +val
        console.log(`tval: ${tVal}`)
        intList.push(tVal)
    }
    for(let i = 0; i < intList.length; i++){
        console.log(result);
        if (i == 0) {
            console.log(`first val: ${intList[i]}`)
            result = intList[i];
        } else if( i == 1){
            console.log(`second val: ${intList[i]}`)
            result << 8
            result = result + intList[i]
        } else if (i == 2){
            console.log(`third val: ${intList[i]}`)
            result << 8
            result = result + intList[i]
        } else if (i == 3){
            console.log(`fourth val: ${intList[i]}`)
            result << 8
            result = result + intList[i]
        }
    }
    
};

const ipToCIDR = function(ip, n) {
    // this findBitNum passes the buggy test case by coincidence.
    const findBitNum = num => num.toString(2).length - 1;
    const numToIp = num => [24, 16, 8, 0].map(i => (num >>> i) % 256).join('.');
    let start = ip.split('.').reduce((acc, x) => 256 * acc + parseInt(x), 0);
    
    const ans = [];
    while (n > 0) {
      // start & -start will clear all bits before rightmost 1
      const len1 = findBitNum(start & -start), len2 = findBitNum(n);
      const len = Math.min(len1, len2);
      ans.push(numToIp(start) + `/${32-len}`);
      start += 1 << len;
      n -= 1 << len;
    }
    return ans;
  };


function convertIPStringToInt(ip: string): number {
    let strList:string[] = ip.split('.')
    let intList:number[] = []
    let result:number = 0
    for(let val of strList){
        let tVal:number = +val
        intList.push(tVal)
    }
    for(let i = 0; i < intList.length; i++){
        console.log(result);
        if (i == 0) {
            result = result * Math.pow(256, i);
            result = intList[i];
        } else if( i == 1){
            result = result * Math.pow(256, i)
            result = result + intList[i]
        } else if (i == 2){
            result = result * Math.pow(256, i)
            result = result + intList[i]
        } else if (i == 3){
            result = result + intList[i]
        }
    }
    return result;
}

function ipToCIDR2(ip: string, n: number): string[] {
    //let val = console.log(convertIPStringToInt(ip))
    let result:string[] = []
    let ip_long:number = convertIPStringToInt(ip);
    let ip_start:number = ip_long;

    while (ip_start <= ip_long + n - 1) {
        let digits = 0;

        while ((ip_start % (1<<(digits+1)) == 0) && (ip) && (ip_start + (1<< (digits+1)) <= ip_long + n)){
            digits = digits + 1;
        }

        result.push(convertIntToIPString(ip_start) + "/" + (32-digits).toString());
        ip_start = ip_start + (1 << digits);
    }

    return result;
};

function convertIntToIPString(num: number):string {
    let cidr = ""
    for(let i:number = 0; i < 4; i++){
        if(i == 0){
            cidr = (num%256).toString() + cidr
        } else {
            cidr = (num%256).toString() + "." + cidr;
            num = num/256;
        }
    }
    return cidr;
}

testIpToCider();