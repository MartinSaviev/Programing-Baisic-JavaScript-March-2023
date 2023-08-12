function combination(input) {

    let enterNum = Number(input[0]);
    let combination = 0;

    for (let firstNum = 0; firstNum <= enterNum; firstNum++) {

        for (let secundNum = 0; secundNum <= enterNum; secundNum++) {

            for (let thirdNum = 0; thirdNum <= enterNum; thirdNum++) {

                let sum = firstNum + secundNum + thirdNum;

                if (sum === enterNum) {

                    combination++;
                }

            }
        }

    }
    console.log(combination);

}
combination(["25"])