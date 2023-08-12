function building(input) {

    let rows = Number(input[0]);
    let cols = Number(input[1]);

    for (let row = rows; row >= 1; row--) {

        let sum = [];

        for (let col = 0; col < cols; col++) {

            if (rows === row) {

                sum.push(`L${row.toString() + col.toString()}`);

            } else if (row % 2 == 1) {

                sum.push(`A${row.toString() + col.toString()}`);

            } else if (row % 2 == 0) {

                sum.push(`O${row.toString() + col.toString()}`);
            }
        }

        console.log(sum.join(" "));

    }

}


building(["6", "4"])
console.log('--------------');
building(["9", "5"])