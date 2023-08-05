function pcMaterials(input) {

    let budget = Number(input[0]);
    let videCardCount = Number(input[1]);
    let processorsCount = Number(input[2]);
    let ramMemoryCount = Number(input[3]);

    let videCardPrice = videCardCount * 250;
    let processorsPrice = videCardPrice * 0.35;
    let processorsTotalPrice = processorsCount * processorsPrice;
    let ramMemoryPrice = videCardPrice * 0.10;
    let ramTotalPrice = ramMemoryCount * ramMemoryPrice;

    let totalPricePc = videCardPrice + processorsTotalPrice + ramTotalPrice;
   
    if(videCardCount>processorsCount){

        let discount = totalPricePc * 0.15;
        totalPricePc -= discount;
    }
    

    if (budget >= totalPricePc) {

        let moneyLeft = budget - totalPricePc;
        console.log(`You have ${moneyLeft.toFixed(2)} leva left!`);

    } else {
        let moneyLeft = totalPricePc - budget;
        console.log(`Not enough money! You need ${moneyLeft.toFixed(2)} leva more!`);
    }
}
pcMaterials(["900","2","1","3"])
;