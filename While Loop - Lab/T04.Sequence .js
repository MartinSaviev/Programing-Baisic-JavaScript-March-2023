function numbers(input) {

    let num = Number(input[0]);

    let newNum = 1;
    while (newNum <= num) {

        console.log(newNum);
        newNum = newNum *2 + 1;


    }

}
numbers(["17"])