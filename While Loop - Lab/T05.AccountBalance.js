function accountBalance(input) {

    let addMoneyOrNot = input[0];

    let index = 0;
    let sum = 0;

    while (addMoneyOrNot !== 'NoMoreMoney') {

        let currNum = Number(input[index]);

        if (currNum <= 0) {

            console.log('Invalid operation!');
            break;
        }

        console.log(`Increase: ${currNum.toFixed(2)}`);
        sum += currNum;

        index++;
        addMoneyOrNot = input[index];

    }
    console.log(`Total: ${sum.toFixed(2)}`);

}

accountBalance(["120",
    "45.55",
    "-150"])

