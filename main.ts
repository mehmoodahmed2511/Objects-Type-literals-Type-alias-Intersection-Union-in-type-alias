let student:{
    name:string;
    rollNo:number;
    serialNo:number;
    section:string;
    semester:number;
    dept: string;
};
student={
    name:'Ali Hassan',
    rollNo:3,
    serialNo:20122106,
    section:'A',
    semester: 5,
    dept:'Computer Science'
};
console.log(student);


let employee:{
    name:string;
    empId:number;
    contact:string;
    email:string;
    deptId:number;
    grade:string;
};
employee={
    name:'Shoaib Feroz',
    empId:322714,
    contact:'03174430957',
    email:'blabla@gmail.com',
    deptId:12,
    grade:"O2"
};
console.log(employee);


//TYPE ALIASING
type empType={
    name:string;
    empId:number,
    grade:string;
    dept:string;
    gender:string;
};
let emp1:empType={
    name:'Salman',
    empId:78652,
    grade:'O1',
    dept:'MMS',
    gender:'male'
};
console.log('Employee 1:',emp1);
let emp2:empType={
    name:'Hamza',
    empId:42192,
    grade:'O1',
    dept:'MMS',
    gender:'male'
};
console.log('Employee 2:',emp2);

//Multiple Object Datatypes in Type Alias
type Father={
    name:string;
    age:number;
    gender:string;
    Children:{
        name:string;
        age:number;
        class:number
    };
};

// let father:Father={
//     name:'Javed Ahmed',
//     age:34,
//     gender:'male',
//     child:Children={
//         name:'Altaaf',
//         age:8,
//         class:1
//     }
// };

//TYPE LITERALS:
let trafficLight: 'Red'='Red';
let trafficLights: 'Red' | 'Green' | 'Yellow'='Green'; //Unions in Type literals
let age: string | number=43;


// INTERSECTION IN TYPE ALIAS
type teacher={
    name:string;
    age:number;
    exp:number;
}
type student={
    name:string;
    age:number;
    class:number;
}
let candidate:teacher & student={
    name:'Ammar',
    age:28,
    exp:3,
    class:15
}
console.log(candidate);


