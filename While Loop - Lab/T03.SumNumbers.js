function numbers(input) {

    let num = Number(input[0]);

    let inputL = input.length;

    let br = 1;
    let sum = 0;

    while (inputL > br) {

        let currNum = Number(input[br]);

        sum += currNum;

        if (sum >= num) {

            console.log(sum);
            break;
        }
        br++;
    }
}


numbers(["20",
"1",
"2",
"3",
"4",
"5",
"6"])

