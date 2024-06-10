//Print the calender format dates and months

let day = 31;

for (let i = 1; i <= 12; i++){
    if (i == 2) {
        day = 28;
    } else if (i == 4 || i == 6 || i == 9 || i == 11) {
        day = 30;
    }
    else {
        day = 31;
    }
    for (let j = 1; j <= day; j++) { 
    console.log(j+" day in month of "+ i);
    }
   console.log("************");
}