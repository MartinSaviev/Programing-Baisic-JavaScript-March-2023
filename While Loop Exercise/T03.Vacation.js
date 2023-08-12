function vacation(input) {

    let index = 0;
    let moneyForExcursion = Number(input[0]);
    let availableMoney = Number(input[1]);

    let spendOrSave = input[index + 2];
    let moneySpendOrSave = Number(input[index + 3]);

    let countDays = 0;
    let spend = 0;

    while (availableMoney < moneyForExcursion) {

        countDays++;

        if (spendOrSave === 'spend') {

            spend++;

            if (spend === 5) {

                console.log("You can't save the money.");
                console.log(`${countDays}`);
                
                break;
            }

            availableMoney -= moneySpendOrSave;

            if (availableMoney < 0) {

                availableMoney = 0;

            }

        } else if (spendOrSave === 'save') {

            availableMoney += moneySpendOrSave;
            spend = 0;
        }

        index += 2;
        spendOrSave = input[index + 2];
        moneySpendOrSave = Number(input[index + 3]);

    }
    if (availableMoney >= moneyForExcursion) {
        console.log(`You saved the money for ${countDays} days.`);

    }
}


vacation(["2000",
    "1000",
    "spend",
    "1200",
    "save",
    "2000"])

vacation(["110",
    "60",
    "spend",
    "10",
    "spend",
    "10",
    "spend",
    "10",
    "spend",
    "10",
    "spend",
    "10"])

vacation(["250",
    "150",
    "spend",
    "50",
    "spend",
    "50",
    "save",
    "100",
    "save",
    "100"])


