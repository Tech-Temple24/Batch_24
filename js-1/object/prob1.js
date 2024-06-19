//syntex

 //Data type
 //1. String
 //2. Number
 //3. Boolean
 //4. Array
 //5. Object
 //6. Function
 //7. Null
 //8. Undefined


 let a ;  //declare
//  console.log(a)  // undefined assign by js

 let b = null // assign null by user
//  console.log(b)


let arr = ["earphone", "laptop", "desktop", "mobile", "television" ,"printer"];
let search = "lapp";
let getData;

for(let i = 0; i < arr.length; i++){
    // console.log(arr[i]);
    if(arr[i] === search){
        getData = search  // get data;
        break;  // break loop after getting data;
    }
    else{
        getData = null;
    }

}


if(getData === null){
    console.log("object not found");
}
else{
console.log("Data found",getData)
}





