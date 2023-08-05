function clothes(input) {

   let budget = Number(input[0]);
   let extrasCount = Number(input[1]);
   let clothesPirce = Number(input[2]);
   
   let decor = budget*0.10;
   let clothing = extrasCount*clothesPirce;
   
    if (extrasCount>=150) {
    //discount 10%
    let discount = clothing*0.10;
    clothing = clothing-discount;
    //clothing = 0.90*clothing;
    }
    let totalPrice = decor+clothing;

   if (budget>=totalPrice){

   
    console.log("Action!");
    console.log(`Wingard starts filming with ${((budget-totalPrice).toFixed(2))} leva left.`);
   }else {
    console.log("Not enough money!");
    console.log(`Wingard needs ${((totalPrice-budget).toFixed(2))} leva more. `)
   }
}

clothes(["20000",
"120",
"55.5"]);
;
