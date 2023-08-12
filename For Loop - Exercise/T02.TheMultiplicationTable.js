function numbers(number) {

    for (let r = 1; r <= number; r += 10) {

        for (let c = 1; c <= 10; c++) {

            console.log(`${c} * ${number} = ${c * number}`);

        }

    }
}
