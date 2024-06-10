//Problem 2: Print Prime Numbers from 1 to given limit

// Prime numbers have only two factors, and 1 is not a prime number, It is a co prime number

//to check the prime number i will count the number of factors


for (let i = 1; i <= 10; i++){
   // i =3
    let factor = 0    //1
    for (let j = 1; j <= i; j++){
       //2
        if (i % j == 0) {
            factor++;
            //3 % 1 ==0
            //3 % 2 == 0
            //3 % 3 == 0 
        }
    }
    if (factor == 2) {
        console.log(i, " is prime number");
    } else {
        console.log(i, " is not prime number");
    }
}



//1
//2
//