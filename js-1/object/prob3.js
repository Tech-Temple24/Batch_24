//how to add values to an object in JavaScript

// let arr =[]

// arr.push("asd");

// console.log(arr)


let obj = {    
 name: "John",
  age: 30,
  city: "New York"
};


obj.name = "Peter";
obj.class="10th"

// console.log(obj.name)
// console.log(obj)


//
for(let key in obj )
    {
    // console.log(key," --- ",data2[key]);
    console.log(key, obj[key] )
    }


