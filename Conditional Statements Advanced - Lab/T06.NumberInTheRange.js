function numbers(input) {

    let num = Number(input[0]);

    let printText = '';
    if (num === 0) {
        printText = 'No';
    }
    else if (num >= -100 && num <= 100) {
        printText = 'Yes';
    }
    else{
        printText = 'No';
    }
console.log(printText);
}
numbers(["0"]);