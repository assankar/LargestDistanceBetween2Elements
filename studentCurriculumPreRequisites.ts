/*Scenario: you’ve developed a university degree planning software which has the ability to create degree plans. 
When a degree plan is created, university advisors have the ability to specify a list of courses which are required for graduation with the degree. 
Additionally, advisors have the ability to provide course prerequisites as a 2D array of the form:

[[Course A, Course A Prerequisite], 
[Course B, Course B Prerequisite], 
[Course A, Course A Prerequisite 2]]

listOfCourse:
[A, B, C, E]

PreReq:
[A, E],
[B, C],
[C, E], 
[D, A], 
[D, B]

E -> (A & C) -> B -> D

A -> E
B -> C
C -> E
D -> A, B

If a given course has multiple prerequisites, there will be multiple entries in the prerequisites 2D array which map the course to each individual prerequisite. 
You can assume that the format of the inputs will always be valid.

A course curriculum is invalid if a course has a prerequisite which can only be satisfied by completing a course for which it is a prerequisite.

Write a function which returns TRUE if the given courses and prerequisites lists are valid and FALSE if the given courses and prerequisites are invalid.
*/

function testStudentCurriculum () {
    const testACourses:string[] = ['A', 'B', 'C', 'D', 'E'];
    const testACatalog:string[][] = [['A', 'E'],['B', 'C'], ['C', 'E'], ['D', 'A'], ['D', 'B']];

    const testBCatalog:string[][] = [['A', 'E'],['B', 'C'], ['C', 'E'], ['D', 'A'], ['D', 'B'], ['E', 'D']];

    console.log(determineBFSOfStudentClasses(testACourses, testACatalog));
    console.log(determineBFSOfStudentClasses(testACourses, testBCatalog));

};

function determineBFSOfStudentClasses(courses: string[], catalog: string[][]){
    let map: Map<string, Set<string>> = new Map<string, Set<string>>();
    let coursesTaken: Set<string> = new Set<string>();
    let coursesToTake: Set<string> = new Set<string>();

    for(let course of courses){
        map.set(course, new Set());
        coursesToTake.add(course);
    }

    for(let c of catalog){
        map.get(c[0]).add(c[1]);
    }

    while (coursesToTake.size != 0){
        let result = [];
        for(let course of courses){
            if(helper(course, map.get(course), coursesTaken)){
                result.push(course);
                coursesToTake.delete(course);
            }
        }
        if(result.length === 0){
            return false;
        }
        for(let r of result){
            coursesTaken.add(r);
        }
    }

    return true;
}

function helper(courseToTake: string, coursePreReqs: Set<string>, coursesTaken: Set<string>){
    if(coursesTaken.has(courseToTake)){
        return false;
    }
    for(let preReq of coursePreReqs){
        if (!coursesTaken.has(preReq)){
            return false;
        }
    }
    return true;
}

testStudentCurriculum();