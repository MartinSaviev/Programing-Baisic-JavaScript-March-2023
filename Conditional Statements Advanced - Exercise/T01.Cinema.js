function cinema(input) {

    let = ticket = String(input[0]);
    let = projectionTipe = Number(input[1]);
    let = rowsCount = Number(input[2]);

    let sum = 0;

    if (ticket === 'Premiere') {
        sum = projectionTipe * rowsCount * 12;
    } else if (ticket === 'Normal') {
        sum = projectionTipe * rowsCount * 7.50;
    } else if (ticket === 'Discount') {
        sum = projectionTipe * rowsCount * 5.00;
    }

    console.log(`${sum.toFixed(2)} leva`);
}

cinema(["Discount",
    "12",
    "30"])


