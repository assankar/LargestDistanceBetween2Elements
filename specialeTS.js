"use strict";
// const map: Map<CityDist[], number> = new Map<CityDist[], number>();
// function main () {
Object.defineProperty(exports, "__esModule", { value: true });
//     const cityTestB = ["Tuscon", "Albany", "Smith", "Westford", "Berkeley"];
//     const distTestB = [102, 94, 114, 1421, 50];
//     const cityTestA = ["Yonkers",
//     "Charleston",
//     "Murfreesboro",
//     "South Bend",
//     "Harlingen",
//     "Anchorage",
//     "Virginia Beach",
//     "Erie",
//     "Manchester",
//     "Roanoke",
//     "Knoxville",
//     "Raleigh",
//     "Gulfport-Biloxi",
//     "Daly City",
//     "Kennewick",
//     "Racine",
//     "Aurora",
//     "Hayward",
//     "Pensacola",
//     "Champaign",
//     "New Bedford",
//     "Seattle",
//     "Independence",
//     "Tampa",
//     "Richmond County",
//     "Newburgh",
//     "Sioux City",
//     "Hagerstown",
//     "Muskegon",
//     "Huntsville",
//     "Lafayette",
//     "Vallejo",
//     "Ocala",
//     "North Las Vegas",
//     "Kansas City",
//     "Fort Walton Beach",
//     "Concord",
//     "Escondido",
//     "Akron",
//     "Panama City",
//     "Sterling Heights",
//     "Albuquerque",
//     "Sacramento",
//     "Stamford",
//     "Downey",
//     "Olathe",
//     "Glendale",
//     "Frederick",
//     "Victorville",
//     "Tyler"]
//     let distTestA = [7956, 8228, 5135, 8501, 8721, 7051, 7511, 4594, 6618, 509, 3067, 6613, 12, 3691, 1327, 5200, 2617, 2944, 2398, 7758, 3303, 340, 9892, 5613, 1065, 5759, 9654, 7083, 7797, 8071, 2658, 7508, 6222, 7423, 5567, 5455, 1182, 9518, 2227, 511, 4346, 8609, 8673, 2682, 8503, 3517, 1181, 1718, 4027, 9207]
//     let citydistList: CityDist[] = [];
//     for(let i = 0; i < distTestA.length; i++){
//         citydistList.push(new CityDist(cityTestA[i], distTestA[i]));
//     }
//     console.log(helper(citydistList));
// };
// function helper(listOfCities: CityDist[]): number {
//     if(listOfCities.length === 0){
//         return 0;
//     }
//     if(map.has(listOfCities)){
//         return map.get(listOfCities);
//     }
//     let maxCities = 0;
//     for(let i = 0; i < listOfCities.length; i++){
//         let startCity = listOfCities[i];
//         let validCities = [];
//         for(let j = 0; j<listOfCities.length; j++){
//             if(listOfCities[j].city > startCity.city && listOfCities[j].distance >= startCity.distance){
//                 validCities.push(listOfCities[j]);
//             }
//         }
//         let runningMax = helper(validCities) + 1;
//         if(runningMax > maxCities){
//             maxCities = runningMax;
//         }
//     }
//     map.set(listOfCities, maxCities);
//     return maxCities;
// }
// class CityDist {
//     city: string
//     distance: number
//     constructor(city: string, distance: number){
//             this.city = city
//             this.distance = distance
//     }
// }
// main()
//# sourceMappingURL=specialeTS.js.map