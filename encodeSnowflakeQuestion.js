"use strict";
// class Student {
//     name: string
//     teacherName: string
//     schoolName: string
//     gradeLevel: number
//     age: number
Object.defineProperty(exports, "__esModule", { value: true });
//     constructor(name?: string, teacherName?: string, schoolName?:string, gradeLevel?: number, age?: number){
//         if (name === undefined){
//             this.name = ""
//         } else {
//             this.name = name
//         }
//         if (teacherName === undefined){
//             this.teacherName = null
//         } else {
//             this.teacherName = teacherName
//         }
//         if (schoolName === undefined){
//             this.schoolName = null
//         } else {
//             this.schoolName = schoolName
//         }
//         if (gradeLevel === undefined){
//             this.gradeLevel = 0
//         } else {
//             this.gradeLevel = gradeLevel
//         }
//         if (age === undefined){
//             this.age = 0
//         } else {
//             this.age = age
//         }
//     }
//     encode(){
//         return `{"name":"${this.name}","teacherName":"${this.teacherName}","schoolName":"${this.schoolName}","gradeLevel":${this.gradeLevel},"age":${this.age}}`;
//     }
//     static decode(input: string){
//         input = input.slice(1,-1)
//         let tokens: string[] = input.split(','); //this is O(N) time complexity!! keep that in mind
//         let name;
//         let teacherName;
//         let schoolName;
//         let gradeLevel;
//         let age;
//         for(let t of tokens){
//             let result = t.split(':');   //this is O(N) time complexity! 
//             if(result[0] === '"name"'){
//                 name = result[1].slice(1,-1);   //this is O(N) time complexity
//             } else if(result[0] === '"teacherName"'){
//                 teacherName = result[1].slice(1,-1);
//             } else if(result[0] === '"schoolName"'){
//                 schoolName = result[1].slice(1,-1);
//             } else if(result[0] === '"gradeLevel"'){
//                 gradeLevel = parseInt(result[1]);
//             } else if(result[0] === '"age"'){
//                 age = parseInt(result[1]);
//             }
//         }
//         return new Student(name, teacherName, schoolName, gradeLevel, age);
//     }
// }
// function main () {
//     // Lets Encode an object obj
//     let Sakthi: Student = new Student("sakthi", "wichmann", "collins", 5, 9);
//     let Anup: Student = new Student("anup", "mommi", "faria", 2, 7);
//     let Josiah: Student = new Student("josiah");
//     let studentList: Student[] = [Sakthi, Anup, Josiah]
//     console.log(encode(studentList));
//     console.log(encode(decode(encode(studentList))));
// };
// function encode(studentList: Student[]): string[] {
//     let encodedStudents: string[] = [];
//     for(let student of studentList){
//         encodedStudents.push(student.encode());
//     }
//     return encodedStudents;
// }
// function decode(students:string []): Student[] {
//     let decodedStudents: Student[] = [];
//     for(let student of students){
//         decodedStudents.push(Student.decode(student))
//     }
//     return decodedStudents;
// }
// main()
//# sourceMappingURL=encodeSnowflakeQuestion.js.map