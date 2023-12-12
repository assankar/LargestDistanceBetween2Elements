function travelingSalesmen(){

}

function helper( citiesToTravel:string[], map: Map<City, number>): cost: number, cityPath: string[] {
    if (map.has(citiesToTravel){
        return map.get(citiesToTravel);
    }
    if (citiesToTravel.length < 2){
        return 0, citiesToTravel
    }

    let costList: number, string[] = []    

    for(let i = 0; i < citiesToTravel.length; i++){
        let newList = citiesToTravel[0,i]
        newlist.push(citiesToTravel[i+1, citiesToTravel.length])
        let helperResultCost = helper(newlist,map).Item1;
        let helperResultPath = helper(newlist,map).Item2;
        let newResult = []
        newResult.push(citiesToTravel[i]);
        let newCost = map.get(citiesToTravel[i] : helperResultPath[0]) + helperResultCost

        for(let cp of helperResultPath){
            newResult.push(cp);
        }

        costList.push(newCost, newResult)
               
    }
    let cityListMin = Math.min(costList.Item1)
    map.put(citiesToTravel, cityListMin)
    return cityListMin        
        
}

class CityList {
    
}

class City {
    city: string
    distance: number

    constructor(city: string, distance: number){
            this.city = city
            this.distance = distance
    }
}

travelingSalesmen();