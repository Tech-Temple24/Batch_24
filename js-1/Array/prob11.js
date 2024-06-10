//given an array of numbers find the average of all the Even numbers

let arr = [1, 22,12,15,88, 3, 4, 5, 6, 7, 8, 9, 10];


let sum = 0;
let count = 0;
for (let i = 0; i < arr.length; i++){
    if (arr[i] % 2 == 0) {
        sum = sum + arr[i];
        count++;
           
    }
    
   
}
console.log(sum);
console.log(count);
let num = sum / count;
console.log("Average is : " + num);
console.log("Average is : " + Math.floor(num));



// 2,2,3,5
// 12/4
// 3