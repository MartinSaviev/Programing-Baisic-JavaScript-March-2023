function vacation(input) {

    let excursionMoney = Number(input[0]);
    let availableMoney = Number(input[1]);

    let count = 0;
    let days = 0;

    for (let i = 2; i < input.length; i += 2) {

        days++;

        let spendOrSave = input[i];
        let sumSpendOrSave = Number(input[i + 1])

        if (spendOrSave === 'spend') {
            count++;
            if (count === 5) {

                console.log(`You can't save the money.`);
                console.log(`${days}`);
                break;

            }
            availableMoney -= sumSpendOrSave;

            if (availableMoney < 0) {
                availableMoney = 0;
            }

        } else {

            availableMoney += sumSpendOrSave;
            count = 0;

            if (availableMoney >= excursionMoney) {

                console.log(`You saved the money for ${days} days.`);
                break;

            }
        }
    }
}