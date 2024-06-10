// let product = "Earphones";


// // console.log(product[1]);
 

// // // console.log(product.length);
// // let bag;
// for (let i = 0; i < product.length; i++){
//     if (product[i] == "E") {
//         product[i] = "D"
//     }
//     console.log(product[i]);
// }

let product = ["Earphones","Mobile", "Tablet", "efsf","Iphone","sdfd", "Samsung"];

// Print last 2 Products

let start = 0;
if (product.length >= 2) {
    start = product.length-2
}

for (let i = start; i < product.length; i++){
    console.log(product[i]);
}