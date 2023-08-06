function mathematicalOperation(input) {

    let firstNum = Number(input[0]);
    let secoundNum = Number(input[1]);
    let operator = String(input[2]);

    let result = 0;

    if (operator === '+') {

        result = firstNum + secoundNum;

    } else if (operator === '-') {

        result = firstNum - secoundNum;

    } else if (operator === '*') {

        result = firstNum * secoundNum;

    } else if (operator === '/') {

        result = firstNum / secoundNum;

        if (firstNum === 0) {

            console.log(`Cannot divide ${secoundNum} by zero`);

        } else if (secoundNum === 0) {

            console.log(`Cannot divide ${firstNum} by zero`);
        }

        if (firstNum !== 0 && secoundNum !== 0) {
            console.log(`${firstNum} ${operator} ${secoundNum} = ${result.toFixed(2)}`);
        }

    } else if (operator === '%') {

        result = firstNum % secoundNum;

        if (firstNum === 0) {

            console.log(`Cannot divide ${secoundNum} by zero`);

        } else if (secoundNum === 0) {

            console.log(`Cannot divide ${firstNum} by zero`);
        }

        if (firstNum !== 0 && secoundNum !== 0) {

            console.log(`${firstNum} ${operator} ${secoundNum} = ${result}`);
        }

    }
    if (operator === '-' || operator === '+' || operator === '*') {

        if (result % 2 === 0) {

            console.log(`${firstNum} ${operator} ${secoundNum} = ${result} - even`);


        } else {

            console.log(`${firstNum} ${operator} ${secoundNum} = ${result} - odd`);
        }
    }
}


mathematicalOperation(["112",
"0",
"/"])


