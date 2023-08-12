function bigNum(input) {

    let index = 0;

    let num = input[index];

    let bigNum = Number.MAX_SAFE_INTEGER;
    
    while (num !== 'Stop') {

        let currNum = Number(num);

        if (currNum < bigNum) {

            bigNum = currNum;

        }
        index++;
        num = input[index];
        
    }
    console.log(bigNum);

}
bigNum(["45",
"-20",
"7",
"99",
"Stop"])

