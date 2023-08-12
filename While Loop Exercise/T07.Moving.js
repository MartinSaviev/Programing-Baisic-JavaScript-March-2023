function moveApartment(input) {

    let width = Number(input[0]);
    let length = Number(input[1]);
    let height = Number(input[2]);

    let allSpace = width * length * height;
    let index = 0;
    let command = input[index+3];

    while (allSpace > 0) {

        command = input[index+3];

        if (command === 'Done') {

            break;

        }
        let currentNum = Number(input[index+3]);
        allSpace -= currentNum;
        index++;

    }
    if (allSpace < 0) {

        console.log(`No more free space! You need ${Math.abs(allSpace)} Cubic meters more.`);

    } else if (allSpace > 0) {

        console.log(`${allSpace} Cubic meters left.`);

    }

}
moveApartment(["10",
    "1",
    "2",
    "4",
    "6",
    "Done"])

moveApartment(["10",
"10",
"2",
"20",
"20",
"20",
"20",
"122"])

