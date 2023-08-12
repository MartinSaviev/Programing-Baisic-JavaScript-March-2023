function solve([arg1]) {
    let n = Number(arg1)

    let current = 1;
    let isBigger = false;
    let printCurrentLine = "";

    for (let row = 1; row <= n; row++) {
        for (let col = 1; col <= row; col++) {

            if (current > n) {
                isBigger = true;
                break;
            }
            printCurrentLine += current + " ";
            current++;

        }
        console.log(printCurrentLine);
        printCurrentLine = "";
        if (isBigger) {
            break;
        }
    }


}

solve(['10']);







