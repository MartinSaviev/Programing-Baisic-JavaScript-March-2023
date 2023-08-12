function birthday(input) {

    let age = Number(input[0]);
    let washingMachine = Number(input[1]);
    let toyPrice = Number(input[2]);

    let money = 0;
    let toys = 0;

    for (let i = 1; i <= age; i++) {

        if (i % 2 == 0) {

            money += i * 5;
            money--;
        }
        else {

            toys++;
        }

    }

    toys = toys * toyPrice;

    let saveMoneyForMachine = money + toys;

    let totalPrice = Math.abs(saveMoneyForMachine - washingMachine);

    if (saveMoneyForMachine >= washingMachine) {

        console.log(`Yes! ${totalPrice.toFixed(2)}`);

    } else {

        console.log(`No! ${totalPrice.toFixed(2)}`);

    }
}

birthday(["21",
    "1570.98",
    "3"])


