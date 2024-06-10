// Father is asking his son to plant seed with the following commands
// 1 ==>    * * * * *
// 2 ==>    * * * *
// 3 ==>    * * *
// 4 ==>    * *
// 5 ==>    *



for (let farm = 5; farm >= 1; farm--) {
   // 4>=1 
  //console.log("upper ", farm);

  let bag = "";
    for (let seeds = 1; seeds <= farm; seeds++) {
        //5>=5 true 4
        //4>=5 false
    bag = bag + " " + "*";
  }
  console.log(bag);
}