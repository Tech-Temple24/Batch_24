//Given a character in lower case print the upper case character

let char = "e" ;

//Step 1  Take a lower case character array

let lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "z"]

//Step 2 Take a Upper case character array

let upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "Z"]

for (let i = 0; i < lowerCase.length; i++){
    if (char == lowerCase[i]) {
        //d == d
        console.log(upperCase[i]);
        break
    }
}