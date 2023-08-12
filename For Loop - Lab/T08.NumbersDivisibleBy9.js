function divisibleNum(input) {

    let firstNum = Number(input[0]);
    let secondNum = Number(input[1]);

    let sum = 0;
    let allCurNumbers = [];
    
    for (let i = firstNum; i <= secondNum; i++) {

        let currNum = i;

        if (currNum % 9 == 0) {

            sum += currNum;
            allCurNumbers.push(currNum);
        }
    }

    console.log(`The sum: ${sum}`);

    allCurNumbers.forEach(element => {
        console.log(element);
    });
}

divisibleNum(["100", "200"]);