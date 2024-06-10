// Father is asking his son to plant seed with the following commands
// 1 ==>      *
// 2 ==>    * * *
// 3 ==>  * * * * *
// 4 ==> * * * * * *
// 5 ==>* * * * * * *


// ********
// *      *
// *      *
// *      *
// *      *
// *      *
// *      *
// ********
    





for (let farm = 1; farm <= 5; farm++) {
    // console.log("upper ", farm);

    let bag = "";
    for (let seeds = 1; seeds <= farm; seeds++) {
        bag = bag +" "+ "*";

  }
    console.log(bag);
}

