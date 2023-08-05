function food(input) {

    let chikenMenu = 10.35;
    let fishMenu = 12.40;
    let vegetarianMenu = 8.15;
    let delivery = 2.50;

    let chickenMenuCount = Number(input[0]);
    let fishMenuCount = Number(input[1]);
    let vegetarianMenuCount = Number(input[2]);

    let chikenMenuAmount = chikenMenu * chickenMenuCount;
    let fishMenuAmount = fishMenu * fishMenuCount;
    let vegetarianMenuAmount = vegetarianMenu * vegetarianMenuCount;

    let totalPriceMenu =  chikenMenuAmount+fishMenuAmount+vegetarianMenuAmount;
    
    let dessert = totalPriceMenu*0.20;

    let totalPrice = totalPriceMenu+dessert+delivery;

    console.log(totalPrice);

}
food(["9 ", "2 ", "6 "]);