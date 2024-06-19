//Object

//Syntax

// let obj = {  
//             key:value
//              }


let arr = [ "earphone", "laptop", "desktop", "mobile", "television" ,"printer"]
let a =   arr[2]

// console.log(a)

let obj = {
         nam : "Rahul",
         age : 22,
         city: "Delhi",
        }

//access 
//bracket notation 

let nam = obj["nam"]
//key always string
// console.log(b)`

let age = obj["age"]
// console.log(age)

//dot notation

let city =  obj.city
// console.log(city)


let newObj = {
    newcity: city  
}


// let obj2 = {
//     nam,
//     age,
//     city
// }


// console.log(obj2)




let newObj2 = {
    section: ["A", "B", "C"],
    student: {
        name: nam,
        age: age,
        city: city
             },
    instructor:[{name: "John", age: 30}, 
                {name: "Mary", age:45}
            ]
}

let section = newObj2.section[2];
let city2 = newObj2.student.city;
let inc = newObj2.instructor[1].age;

console.log(inc)
// console.log(city2)
// console.log(section)