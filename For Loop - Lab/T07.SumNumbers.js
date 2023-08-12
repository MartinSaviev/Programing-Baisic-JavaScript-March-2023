function textNumbers(input) {

    let textLenght = input[0];

    let sum = 0;

    for (let i = 0; i < textLenght.length; i++) {

        let currentNum = Number([textLenght[i]]);
        sum += currentNum;


    }
    console.log(`The sum of the digits is:${sum}`);
}
textNumbers(["1234"]);