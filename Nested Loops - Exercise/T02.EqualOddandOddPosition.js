function equalSum(input) {

    let firstNum = Number(input.shift());
    let secondNum = Number(input.shift());

    let printResult = [];

    for (let i = firstNum; i <= secondNum; i++) {

        let oddSum = 0;
        let evenSum = 0;

        let currNum = String(i);
        let currNumArr = currNum.split("");

        for (let i = 0; i < currNumArr.length; i++) {

            let num = Number(currNumArr[i]);

            if (i % 2 === 0) {
                evenSum += num;
            } else {
                oddSum += num;
            }

        }

        if (oddSum === evenSum) {
                  
            printResult.push(currNum);

        }
    }

    console.log(printResult.join(" "));
}
equalSum(["100000",
    "100050"])




