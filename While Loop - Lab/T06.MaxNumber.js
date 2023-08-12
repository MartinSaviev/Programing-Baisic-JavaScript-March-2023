function bigNum(input) {

    let index = 0;

    let num = input[index];

    let bigNum = Number.MIN_SAFE_INTEGER;
    
    while (num !== 'Stop') {

        let currNum = Number(num);

        if (currNum > bigNum) {

            bigNum = currNum;

        }
        index++;
        num = input[index];
        
    }
    console.log(bigNum);

}
bigNum(["-1",
"-2",
"Stop"])


