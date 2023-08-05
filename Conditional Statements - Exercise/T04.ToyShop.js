function toys(input) {

    let puzzle = Number(2.60);
    let tolkingDolls = Number(3.00);
    let teddyBear = Number(4.10);
    let minions = Number(8.20);
    let trucks = Number(2.00);

    let excursionPrice = Number(input[0]);
    let puzzleCount = Number(input[1]);
    let tolkingDollCount = Number(input[2]);
    let teddyBearCount = Number(input[3]);
    let minionsCount = Number(input[4]);
    let trucksCount = Number(input[5]);

    let countToys = puzzleCount + tolkingDollCount + teddyBearCount +
        minionsCount + trucksCount;

    let puzzlePrice = puzzle*puzzleCount;
    let tolkingDollsPrice = tolkingDolls * tolkingDollCount;
    let teddyBearPrice = teddyBear * teddyBearCount;
    let minionsPrice = minions * minionsCount;
    let trucksPrice = trucks * trucksCount;



    let PriceAllToys = puzzlePrice + tolkingDollsPrice +
    teddyBearPrice + minionsPrice+trucksPrice;

    let discount = Number(0);
    if (countToys >= 50) {

        discount = PriceAllToys * (25 / 100);
    }

    let totalPriceAllToys = PriceAllToys - discount;
    let rent = totalPriceAllToys * (10 / 100);

    let totalPricePlusRent = totalPriceAllToys - rent;

    if (totalPricePlusRent >= excursionPrice) {
        let totalPrice = totalPricePlusRent - excursionPrice;
        console.log(`Yes! ${totalPrice.toFixed(2)} lv left.`)

    } else {
        let totalPrice = excursionPrice - totalPricePlusRent;
        console.log(`Not enough money! ${totalPrice.toFixed(2)} lv needed.`)
    }

}
toys(["320","8","2","5","5","1"]);
