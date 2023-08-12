function cake(input) {

    let longCake = Number(input[0]);
    let wideCake = Number(input[1]);

    let allCakePieces = longCake * wideCake;
    let index = 2;
    let numberPieces = '';

    while (allCakePieces
        >= 0) {

        numberPieces = input[index];
        if (numberPieces === 'STOP') {

            break;

        }
        numberPieces = Number(input[index]);
        index++;
        allCakePieces -= numberPieces;


    }
    if (allCakePieces
        >= 0) {

        console.log(`${allCakePieces
            } pieces are left.`);


    } else if (allCakePieces
        < 0) {

        console.log(`No more cake left! You need ${Math.abs(allCakePieces
        )} pieces more.`);
    }

}

cake(["10",
    "2",
    "2",
    "4",
    "6",
    "STOP"])

cake(["10",
    "10",
    "20",
    "20",
    "20",
    "20",
    "21"])


